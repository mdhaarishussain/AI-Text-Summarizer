const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
    const textarea = e.target;

    // Enable the button when text area has value within specified length
    if (textarea.value.length > 200 && textarea.value.length < 100000) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function submitData(e) {
    // Add loading animation to the submit button
    submitButton.classList.add("submit-button--loading");

    const text_to_summarize = textArea.value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "text_to_summarize": text_to_summarize
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // Send the text to the server using fetch API
    fetch('/api/summarize', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Expecting JSON response
        })
        .then(data => {
            // Update the output text area with new summary
            summarizedTextArea.value = data.summary; // Accessing summary from JSON response

            // Stop the spinning loading animation
            submitButton.classList.remove("submit-button--loading");
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to summarize text. Please try again.'); // User feedback
            submitButton.classList.remove("submit-button--loading");
        });
}

// Dark mode functionality remains unchanged
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

// Check for saved preference for dark mode
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
    localStorage.setItem('darkMode', null);
}