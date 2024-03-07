import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CustomBudget } from "../Interfaces/CustomBudget";

export function Response(): JSX.Element {

    /**
     *     const prompt = `Identify the language of the following phrases "${destination}", "${languages}", "${age}", "${origin}", "${beliefs}", "${duration}", "${locations}", "${budget}", "${needs}", "${interests}", "${dietaryInfo}" and "${purpose}". Translate the following into that language and give an output based on the following prompt: 
        I am visiting ${destination}.
        My travel purpose is ${purpose}.
        I speak ${languages}.
        I are ${age} years old.
        I are from ${origin}.
        My religious preference is ${beliefs}. 
        I am planning to stay for ${duration}.
        I Am interested in visiting ${locations}.
        My budget is ${budget}. 
        My needs are ${needs}.
        My hobbies include ${interests}.
        I have ${dietaryInfo} dietary restrictions.


        Provide concise advise on information about lodging, where I might like to visit, and other useful things
        based on my budget, dietary preferences, etc. Also keep my age of the user in mind. Use appropriate language
        and activity ideas for my age group. Do so in a nice formatting using line breaks. Use a line break after each sentence.  Also use a line break if a line is more than 90 characters.`;
        const userInput = `Identify the language of the following phrases "${destination}", "${languages}", "${age}", "${origin}", "${beliefs}", "${duration}", "${locations}", "${budget}", "${needs}", "${interests}", "${dietaryInfo}" and "${purpose}". Translate the following into that language and give an output based on the following prompt: 
        I am visiting ${destination}.
        My travel purpose is ${purpose}.
        I speak ${languages}. 
        I are ${age} years old. 
        I are from ${origin}. 
        My religious preference is ${beliefs}. 
        I am planning to stay for ${duration}.
        I Am interested in visiting ${locations}.
        My budget is ${budget}. 
        My needs are ${needs}.
        My hobbies include ${interests}.
        I have ${dietaryInfo} dietary restrictions.


        Provide concise advise on information about lodging, where I might like to visit, and other useful things
        based on my budget, dietary preferences, etc. Also keep my age of the user in mind. Use appropriate language
        and activity ideas for my age group. Do so in a nice formatting using line breaks. Use a line break after each sentence.  Also use a line break if a line is more than 90 characters.`;

     */

    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');


    
    //const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = 'TBD'
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