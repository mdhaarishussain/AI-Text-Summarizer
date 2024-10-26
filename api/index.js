const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', (req, res) => {
    // Get the text_to_summarize property from the request body
    const text = req.body.text_to_summarize;

    // Call your summarizeText function, passing in the text from the request
    summarizeText(text)
        .then(response => {
            res.json({ summary: response }); // Send the summary as a JSON response
        })
        .catch(error => {
            console.error("Error during summarization:", error.message); // Log error for server-side debugging
            res.status(500).json({ error: "Failed to summarize text" }); // Send an error response to client
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});