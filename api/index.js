const express = require('express');
const summarizeText = require('./summarize');
const app = express();

app.use(express.json());

app.post('/api/summarize', async (req, res) => {
    try {
        const text = req.body.text_to_summarize;
        const summary = await summarizeText(text);
        res.status(200).json({ summary });
    } catch (error) {
        console.error("Error in /api/summarize:", error.message);
        res.status(500).json({ error: "Summarization failed" });
    }
});

module.exports = app;
