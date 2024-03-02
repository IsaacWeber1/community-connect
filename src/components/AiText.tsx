import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    /**
     * Generative AI Call to fetch text insights
     */
    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `tell me about your favorite anime`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleChangeSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        // ii have no idea what the line above means my ide auto changed it
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div>
            <p>
                HONKKKKK
            </p>
            <div>
                <div style={{ display: 'flex' }}>
                    <input placeholder='thngs' onChange={(e) => handleChangeSearch(e)} />
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>VACATE</button>
                </div>

                {
                    loading == true && (aiResponse == '') ?
                        <p style={{ margin: '30px 0' }}>Loading ...</p>
                        :
                        <div style={{ margin: '30px 0' }}>
                            <p>{aiResponse}</p>
                        </div>
                }
            </div>
        </div>
        // WILL ADD AFTER THE FUN STUFF
    );
};

export default AiText;