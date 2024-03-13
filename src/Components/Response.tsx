import { GoogleGenerativeAI } from "@google/generative-ai";

export function Response({
    prompt,
    nextQuestion,
    setNextQuestion
}: {
    prompt: string;
    nextQuestion: string,
    setNextQuestion: (reponse: string) => void;
}): JSX.Element {

    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');

    async function aiRun() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setNextQuestion(text);
    }

    return(
        <div>
            <h2>Your Advice</h2>
            <button style={{ marginLeft: '20px' }} onClick={() => aiRun}>Next Question</button>
        </div>
    )
}