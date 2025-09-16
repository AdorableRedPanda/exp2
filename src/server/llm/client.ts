import OpenAI from 'openai';

const API_KEY = process.env.GROQ_API_KEY as string;
const API_URL = process.env.GROQ_URL as string;

export const openAi = new OpenAI({
	apiKey: API_KEY,
	baseURL: API_URL,
});
