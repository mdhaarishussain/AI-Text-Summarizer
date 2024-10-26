# 🤖 AI Text Summarizer

A modern web application that leverages the Hugging Face API (specifically the BART-large-CNN model) to generate concise summaries of long-form text content. Built with Node.js and Express on the backend, and featuring a responsive, dark-mode compatible frontend.

![Demo Screenshot](https://via.placeholder.com/800x400?text=AI+Text+Summarizer+Demo)

## ✨ Features

- **Smart Summarization**: Uses Facebook's BART-large-CNN model through Hugging Face's API
- **Character Limits**: Handles text between 200 and 100,000 characters
- **Dark Mode Support**: Toggle between light and dark themes with persistent preferences
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Real-time Validation**: Input validation and button state management
- **Loading States**: Visual feedback during API calls

## 🚀 Quick Start

### Prerequisites

- Node.js installed on your system
- Hugging Face API access token
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-text-summarizer.git

# Navigate to the project directory
cd ai-text-summarizer

# Install dependencies
npm install

# Set up environment variables
echo "ACCESS_TOKEN=your-huggingface-token" > .env
```

### Running the Application

```bash
# Start the server
npm start

# The application will be available at http://localhost:3000
```

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 with custom properties for theming
- Vanilla JavaScript
- Inter font family
- Responsive design with media queries
- Local storage for theme preferences

### Backend
- Node.js
- Express.js
- Axios for API calls
- Environment variables for secure token storage

## 📁 Project Structure

```
ai-text-summarizer/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── summarize.js       # API interaction logic
├── index.js          # Express server setup
└── package.json
```

## 💻 API Endpoints

### POST `/summarize`
Accepts text content and returns a summarized version.

#### Request Body
```json
{
  "text_to_summarize": "Your long text here..."
}
```

#### Parameters
- `max_length`: 100 (default)
- `min_length`: 30 (default)

## 🎨 Customization

### Themes
The application supports both light and dark modes. Theme preferences are stored in localStorage and can be toggled via the UI.

#### Light Theme Colors
- Background: `#CADCFC`
- Text Primary: `#1E2761`
- Container Background: `#ffffff`

#### Dark Theme Colors
- Background: `#00246B`
- Text Primary: `#CADCFC`
- Container Background: `#003399`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

- API tokens are stored in environment variables
- Input validation is implemented for text length
- Cross-site scripting (XSS) protection through proper content handling

## 🐛 Troubleshooting

Common issues and solutions:

1. **API Token Issues**: Ensure your Hugging Face API token is correctly set in the `.env` file
2. **Text Length Errors**: Verify your input is between 200 and 100,000 characters
3. **Server Connection**: Check if the server is running on port 3000

## 📞 Support

For support, please open an issue in the GitHub repository.

---
Made with ❤️ using Node.js and Hugging Face API