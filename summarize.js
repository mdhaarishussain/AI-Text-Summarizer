const axios = require('axios');

// This function calls the API to summarize text and returns the summarized text as a string.
async function summarizeText(text) {
    // Prepare the data to be sent to the API
    let data = JSON.stringify({
        "inputs": text,
        "parameters": {
            "max_length": 100,
            "min_length": 30
        }
    });

    // Configuration for the API request
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN'] // Ensure ACCESS_TOKEN is set in environment variables
        },
        data: data
    };

    try {
        // Make the API request
        const response = await axios.request(config);
        return response.data[0].summary_text; // Return the summarized text from the response
    } catch (error) {
        console.error("Error during summarization:", error.response ? error.response.data : error.message);
        throw new Error("Summarization failed"); // Throw an error to be handled by the calling function
    }
}

// Allows for summarizeText() to be called outside of this file
module.exports = summarizeText;