import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

const SYSTEM_INSTRUCTION = `
You are a knowledgeable and helpful guide about Coursera. 
Your goal is to explain what Coursera is, how it works, its pricing models (Coursera Plus, Audit, Financial Aid), 
the types of certificates available (Professional Certificates, Specializations, Degrees), and its partners.
Keep your answers concise, encouraging, and easy to read. 
If asked about specific courses, recommend popular ones based on general knowledge up to your cutoff.
Do not make up facts. If you don't know, say so.
Tone: Professional, educational, friendly.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  
  try {
    const responseStream = await chat.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};