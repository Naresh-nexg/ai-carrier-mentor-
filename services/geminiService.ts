import { GoogleGenAI, Chat } from '@google/genai';
import { Message } from '../types';

// Fix: The API key should be obtained directly from process.env.API_KEY as per guidelines.
// The check for API_KEY is also removed as its presence should be assumed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chat: Chat | null = null;

const getSystemInstruction = (languageName: string) => `
You are an intelligent AI Career Mentor. Your purpose is to help students and professionals explore, plan, and advance their careers.
- Analyze users' skills, interests, and goals.
- Recommend personalized career paths, learning resources, and job opportunities.
- Suggest skill development plans based on industry trends.
- You can also simulate mock interviews and provide constructive feedback.
- Be encouraging, professional, and insightful.
- IMPORTANT: You MUST respond in the following language: ${languageName}.
`;

export const startChat = (languageName: string) => {
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: getSystemInstruction(languageName),
        },
    });
};

export const generateResponse = async (newMessage: string): Promise<string> => {
    if (!chat) {
        throw new Error("Chat not initialized. Call startChat first.");
    }

    try {
        const result = await chat.sendMessage({ message: newMessage });
        return result.text;
    } catch (error) {
        console.error("Error generating response from Gemini:", error);
        throw new Error("Failed to get response from AI. Please check your API key and network connection.");
    }
};