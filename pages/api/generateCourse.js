// pages/api/generateCourse.js

import OpenAI from 'openai';

// Set up the OpenAI API client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set in .env.local
});


export default async function handler(req, res) {
    if (req.method === "POST") {
        const { courseTitle } = req.body;  // Extract course title from request body

        if (!courseTitle) {
            return res.status(400).json({ error: "Course title is required" });
        }

        try {
            // Dynamically replace the course title in the prompt
            const prompt = `
        Act as a senior tutor and curriculum designer for a course titled "${courseTitle}".
        
        Create a structured JSON file with the following specifications:
        Overall course title and description.
        12 chapters in total.
        Each chapter must have:
        A title
        A detailed description (~250 words)
        An estimated_time (example: "2 hours")
        A difficulty_level (Beginner, Intermediate, Advanced)
        key_takeaways (3-5 important points)
        4-5 reputable links (official docs, trusted tutorials, etc.)
        5 subchapters under each chapter, and each subchapter must have:
        title
        description (~250 words)
        estimated_time
        difficulty_level
        key_takeaways (3-5 important points)
        3-4 reputable links
        Each chapter and subchapter must logically link to the next one, ensuring smooth educational flow.
        Output the final JSON only. No explanation outside the JSON.
        
        Important Notes:
        Use official React documentation, MDN, freeCodeCamp, W3Schools, or similar for references.
        Descriptions must be engaging, easy to understand, and become progressively more advanced.
        Ensure professional, clean JSON formatting suitable for direct use in an application.
        Use id fields like "ch1", "ch1.1", "ch1.2", etc., for better tracking.
        Optional: include a final project under final_project, summarizing the skills learned.
        Provide only the JSON, no extra commentary.
      `;

            const response = await client.responses.create({
                model: 'gpt-4', // You can use 'gpt-4' or another model
                instructions: 'You are a coding assistant that talks like a pirate', // Instructions for behavior
                input: prompt, // The user's message
            });

            console.log("response", response)

            // const response = await openai.createCompletion({
            //     model: "gpt-4",
            //     prompt,
            //     max_tokens: 3500,
            //     temperature: 0.7,
            // });

            res.status(200).json({
                courseContent: response.output_text,
            });
        } catch (error) {
            res.status(500).json({ error: "Failed to generate course content" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
