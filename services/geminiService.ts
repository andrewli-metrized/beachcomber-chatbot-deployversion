
import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA, SYSTEM_INSTRUCTION } from '../constants';

// Ensure the API key is available, but do not handle its input in the UI.
if (!process.env.API_KEY) {
  // This will be caught by the App component's error handling.
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatbotResponse = async (query: string): Promise<string> => {
  try {
    const fullPrompt = `
${SYSTEM_INSTRUCTION}

--- FAQ DATA ---
${FAQ_DATA}
--- END FAQ DATA ---

USER QUESTION: "${query}"
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error fetching from Gemini API:", error);
    if (error instanceof Error) {
        return `I encountered an error trying to respond: ${error.message}`;
    }
    return "I encountered an unknown error while trying to respond.";
  }
};
