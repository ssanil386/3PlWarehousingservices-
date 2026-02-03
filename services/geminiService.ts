import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLogisticsContent = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a professional, SEO-friendly blog post summary (approx 150 words) for a 3PL warehousing company in India about the topic: "${topic}". Focus on efficiency, technology, and Indian market trends.`,
    });
    return response.text || "Content generation failed. Please try again.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error: Could not generate content. Please check your API key.";
  }
};

export const generateServiceDescription = async (serviceName: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, compelling description (2 sentences) for a warehousing service named "${serviceName}" suitable for the Indian logistics market.`,
    });
    return response.text || "Description generation failed.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Error: Could not generate description.";
  }
};