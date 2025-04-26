// pages/api/chat.js

import OpenAI from 'openai';

// Set up the OpenAI API client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set in .env.local
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { message } = req.body;

      // Make an API call to OpenAI's responses.create method
      const response = await client.responses.create({
        model: 'gpt-4', // You can use 'gpt-4' or another model
        instructions: 'You are a coding assistant that talks like a pirate', // Instructions for behavior
        input: message, // The user's message
      });

      // Send the response from ChatGPT back to the frontend
      res.status(200).json({ response: response.output_text.trim() });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      res.status(500).json({ error: "Something went wrong with the API call" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
