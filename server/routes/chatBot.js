const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Create an Express Router instance
const router = express.Router();

// Middleware specific to this router (optional, but good practice)
router.use(bodyParser.json());
router.use(cors()); // Configure this if necessary

// --- Gemini API Integration ---
const { GoogleGenerativeAI } = require("@google/generative-ai");
const geminiApiKey = process.env.GEMINI_API_KEY;

// Ensure API key is loaded
if (!geminiApiKey) {
  console.error("GEMINI_API_KEY is not set in environment variables.");
  // In a production environment, you might want to throw an error or exit
  // process.exit(1);
}

const genAI = new GoogleGenerativeAI(geminiApiKey);

// A function to interact with the Gemini API
const getGeminiResponse = async (message, conversationHistory) => {
  try {
    // --- THIS IS THE CRITICAL LINE TO ENSURE IS UPDATED ---
    // It MUST include "models/" at the beginning
    const modelId = "models/gemini-2.5-flash-preview-05-20";
    console.log(`Attempting to use Gemini model: ${modelId}`); // Added for debugging

    const model = genAI.getGenerativeModel({ model: modelId });


    // Updated prompt to make the chatbot a general assistant for all student doubts
    const prompt = "You are a highly knowledgeable and experienced assistant, capable of answering a wide range of questions on any topic. Respond in a helpful, clear, accurate and comprehensive manner, and keep it short, similar to how an expert would explain things. Do not mention 'student guide' or any specific project name.";

    // Format the conversation history for the API
    const history = conversationHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    // Start a chat session with the model and provide the history and initial prompt
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: prompt }], // Inject the persona prompt as the first user message
        },
        // ... then add the actual conversation history
        ...history
      ],
      generationConfig: {
        maxOutputTokens: 1000, // Limit the response length
      },
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    //console.log("Gemini Model Raw Response:", text); // Log the raw response for debugging

    return text;

  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    // Return a user-friendly error message
    return "Sorry, I am unable to process your request right now. Please try again later.";
  }
};


// --- API Endpoint ---
router.post('/', async (req, res) => {
  const { message, conversationHistory } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    const botReply = await getGeminiResponse(message, conversationHistory);
    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("Error in chatbot endpoint:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Export the router
module.exports = router;