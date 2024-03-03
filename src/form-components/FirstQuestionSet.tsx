import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { GoogleGenerativeAI } from "@google/generative-ai";


export function FirstQuestionSet(): JSX.Element {

    const [purpose, setPurpose] = useState<string>("");
    const [travellerCount, setTravellerCount] = useState<number>(1);
    const [duration, setDuration] = useState<number>(0);
    const [needs, setNeeds] = useState<string>("");
    const [locations, setLocations] = useState<string>("");
    const [previouslyBeen, setPreviouslyBeen] = useState<boolean>(false);
    const [age, setAge] = useState<number>(0);
    const [interests, setInterests] = useState<string>();
    const [origin, setOrigin] = useState<string>();
    const [dietaryInfo, setDietaryInfo] = useState<string>();
    const [bugdet, setBudget] = useState<number>(0);

    const genAI = new GoogleGenerativeAI('AIzaSyBLTpKC-aCVOe3CLEKXTb03qWp8C3jaXAQ');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

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
        <>
            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="numberTravellingWith">
                <Form.Label>How many people are you travelling with?</Form.Label>
                <Form.Control
                type="number"
                value={travellerCount}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTravellerCount(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="howLongStaying">
                <Form.Label>How long are you staying?</Form.Label>
                <Form.Control
                type="number"
                value={duration}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDuration(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="budgetForTrip">
                <Form.Label>What is your budget (in dollars)?</Form.Label>
                <Form.Control
                type="number"
                value={bugdet}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBudget(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="ageOfUser">
                <Form.Label>How old are you?</Form.Label>
                <Form.Control
                type="number"
                value={age}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="needs">
                <Form.Label>Do you have any specific needs? (Consider: food, phone, money, housing/lodging, job, language learning resources)</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                value={needs}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNeeds(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="specificLocationPreferences">
                <Form.Label>If you are travelling for fun, are there specific locations or sites you are interested in visiting?</Form.Label>
                <Form.Control
                as="textarea"
                value={locations}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocations(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Check
                type="checkbox"
                id="previouslyTravelledToLocation"
                label="Have you previously travelled to this location?"
                checked={previouslyBeen}
                onChange={() => setPreviouslyBeen(!previouslyBeen)}
            />
            <hr></hr>
            <Form.Group controlId="interests/hobbies">
                <Form.Label>What are your interests/hobbies?</Form.Label>
                <Form.Control
                type="textarea"
                value={interests}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInterests(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="homeCountry/Location">
                <Form.Label>Where are you from?</Form.Label>
                <Form.Control
                value={origin}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOrigin(event.target.value)}>
                </Form.Control>
            </Form.Group>
            <hr></hr>
            <Form.Group controlId="hasDietaryRestrictions">
                <Form.Label>Do you have any dietary restrictions?</Form.Label>
                <Form.Control
                value={dietaryInfo}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDietaryInfo(event.target.value)}>
                </Form.Control>
            </Form.Group>
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
        </>
        
    )
}

