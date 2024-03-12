import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function Response({
    prompt,
}: {
    prompt: string;
}): JSX.Element {

    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');

    //const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiRun();
    }

    return(
        <div>
            <h2>Your Advice</h2>
            <div>
                <div style={{ display: 'flex' }}>
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>GENERATE RESPONSE</button>
                </div>
                {
                    loading === true && (aiResponse === '') ?
                        <p style={{ margin: '30px 0' }}>Loading ...</p>
                        :
                        <div style={{ margin: '30px 0' }}>
                            <pre><p>{aiResponse}</p></pre>
                        </div>
                }
            </div>
        </div>
    )
}