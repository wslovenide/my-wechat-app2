
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts[0].text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: "你是一个名为“微连”的移动聊天应用中的友好 AI 伴侣。你的回复应该简短、口语化且自然，就像在给朋友发短信一样。请始终使用中文回答，并偶尔使用表情符号。",
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "抱歉，我无法处理该请求。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接已断开，请检查您的网络设置。";
  }
};
