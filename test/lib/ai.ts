import Groq from "groq-sdk";

const PROVIDER = process.env.AI_PROVIDER ?? "groq";
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateResponse(prompt: string) {
  let completion;
  if (PROVIDER === "groq") {
    completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
  }
  return completion!.choices[0].message.content;
}
