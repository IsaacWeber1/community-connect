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
        const prompt = `Generate some information giving travel advice for a user with the following information. 
                        The person is visiting ${destination}.
                        Their travel purpose is ${purpose}.
                        They speak ${languages}. 
                        They are ${age} years old. 
                        They are from ${origin}. 
                        Their religious preference is ${beliefs}. 
                        They are planning to stay for ${duration}.
                        They are interested in visiting ${locations}.
                        Their budget is ${budget}. 
                        Their needs are ${needs}.
                        Their hobbies include ${interests}.
                        They have ${dietaryInfo} dietary restrictions.


                        Provide concise advise on information about lodging, where they would like to visit, and other useful things
                        based on their budget, dietary preferences, etc. Also keep the age of the user in mind. Use appropriate language
                        and activity ideas for the age group.`;
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