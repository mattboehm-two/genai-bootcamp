
import { useState, useMemo } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { snowData } from '../data/snowData.ts';

// A simple in-memory cache for the chat instance
let chatInstance: Chat | null = null;

export const useGemini = () => {
  const [error, setError] = useState<string | null>(null);

  const ai = useMemo(() => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      setError('API key is not configured.');
      console.error('API_KEY environment variable not set.');
      return null;
    }
    return new GoogleGenAI({ apiKey, vertexai: true });
  }, []);

  const getChat = () => {
    if (chatInstance) {
      return chatInstance;
    }
    if (!ai) {
      throw new Error('GoogleGenAI not initialized.');
    }

    const systemInstruction = `You are a helpful, friendly chatbot for the Alaska Department of Snow. Your name is 'Blizzard'.
Your capabilities are:
1. Answering questions about plowing, school closures, and road conditions using the provided JSON data. Base your answers ONLY on this data. If the information isn't in the data, state that you don't have that specific information. Do not invent details.
2. Providing weather forecasts. For this, you MUST use your search tool to get real-time information. When you use the search tool, you MUST cite your sources by providing the URLs.

Here is the current data for local disruptions, last updated at ${snowData.lastUpdated}:
${JSON.stringify(snowData, null, 2)}
`;

    chatInstance = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }],
      },
    });
    return chatInstance;
  };

  const getBotResponseStream = async (message: string) => {
    setError(null);
    try {
      const chat = getChat();
      const result = await chat.sendMessageStream({ message });
      return result;
    } catch (e) {
      console.error(e);
      setError('Failed to get response from the model.');
      throw e;
    }
  };

  return { getBotResponseStream, error };
};
