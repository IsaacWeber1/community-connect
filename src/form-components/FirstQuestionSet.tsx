import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { GoogleGenerativeAI } from "@google/generative-ai";

export function FirstQuestionSet(): JSX.Element {

    const [destination, setDestination]= useState<string>();
    const [purpose, setPurpose] = useState<string>();
    const [beliefs, setBeliefs] = useState<string>();
    const [languages, setLanguages]= useState<string>();
    const [duration, setDuration] = useState<string>();
    const [needs, setNeeds] = useState<string>();
    const [locations, setLocations] = useState<string>();
    const [age, setAge] = useState<number>();
    const [interests, setInterests] = useState<string>();
    const [origin, setOrigin] = useState<string>();
    const [dietaryInfo, setDietaryInfo] = useState<string>();
    const [budget, setBudget] = useState<number>();
    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Identify the language of the following phrases "${destination}", "${languages}", "${age}", "${origin}", "${beliefs}", "${duration}", "${locations}", "${budget}", "${needs}", "${interests}", "${dietaryInfo}" and "${purpose}". Translate the following into that language and give an output based on the following prompt: 
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
                        and activity ideas for my age group. Do so in a nice formatting using line breaks. Use a line break after each sentence.`;
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
            <ol>
                <h4>We will ask a few questions to ensure your trip is personalized to your preferences</h4>
                <br></br>
                <Form.Group controlId="placeVisiting">
                    <li>
                        <Form.Label>Where are you visiting?</Form.Label>
                        <Form.Control
                        value={destination}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDestination(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="reasonForTrip">
                    <li>
                        <Form.Label>What language(s) do you speak?</Form.Label>
                        <Form.Control
                        value={languages}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLanguages(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="ageOfUser">
                    <li>
                        <Form.Label>Could you please share how old you are?</Form.Label>
                        <Form.Control
                        type="number"
                        value={age}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value))}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="homeCountry/Location">
                    <li>
                        <Form.Label>Where are you from?</Form.Label>
                        <Form.Control
                        value={origin}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOrigin(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="reasonForTrip">
                    <li>
                        <Form.Label>What is the purpose of your travel?</Form.Label>
                        <Form.Control
                        value={purpose}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="stateReligiousBeliefs">
                    <li>
                        <Form.Label>Is there anything you would like to share about your religious beliefs?</Form.Label>
                        <Form.Control
                        value={beliefs}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBeliefs(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="numberTravellingWith">
                    <li>
                        <Form.Label>Are you traveling with anyone? If so, what type of group are you traveling with? (ie. family, friends, school)</Form.Label>
                        <Form.Control
                        value={interests}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInterests(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="howLongStaying">
                    <li>
                        <Form.Label>How long are you planning to stay?</Form.Label>
                        <Form.Control
                        value={duration}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDuration(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="budgetForTrip">
                    <li>
                        <Form.Label>What is your budget for this trip?</Form.Label>
                        <Form.Control
                        type="number"
                        value={budget}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBudget(parseInt(event.target.value))}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="needs">
                    <li>
                        <Form.Label>Do you have any specific needs? (ie. food, phone, money, lodging, job, language resources)</Form.Label>
                        <Form.Control
                        value={needs}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNeeds(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="specificLocationPreferences">
                    <li>
                        <Form.Label>If you are travelling for fun, do you have any specific places or activities of interest?</Form.Label>
                        <Form.Control
                        value={locations}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocations(event.target.value)}>
                        </Form.Control>
                    </li>
                </Form.Group>
                <br></br>
                <Form.Group controlId="hasDietaryRestrictions">
                    <li>
                        <Form.Label>Is there anything specific you hope to learn or discover while on your trip?</Form.Label>
                        <span>
                            <Form.Control
                            value={dietaryInfo}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDietaryInfo(event.target.value)}>
                            </Form.Control>
                        </span>
                    </li>
                </Form.Group>
            </ol>
            <div>
            <h2>Your Advice</h2>
            <div>
                <div style={{ display: 'flex' }}>
                    
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>GENERATE RESPONSE</button>
                </div>

                {
                    loading == true && (aiResponse == '') ?
                        <p style={{ margin: '30px 0' }}>Loading ...</p>
                        :
                        <div style={{ margin: '30px 0' }}>
                            <pre><p>{aiResponse}</p></pre>
                        </div>
                }
            </div>
        </div>
        </div>
    )
}