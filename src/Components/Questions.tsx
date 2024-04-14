import React, { useState } from "react";
import { Form, } from 'react-bootstrap';
import { Response } from "./Response";
import { Budget } from "./Budget";
//import { GoogleGenerativeAI } from "@google/generative-ai";
//import { CustomBudget } from "../Interfaces/CustomBudget";

export function Questions(): JSX.Element {

    const [destination, setDestination]= useState<string>();
    const [purpose, setPurpose] = useState<string>();
    const [languages, setLanguages]= useState<string>();
    const [duration, setDuration] = useState<string>();
    const [needs, setNeeds] = useState<string>();
    const [locations, setLocations] = useState<string>();
    const [age, setAge] = useState<number>();
    const [interests, setInterests] = useState<string>();
    const [dietaryInfo, setDietaryInfo] = useState<string>();
    const [budget, setBudget] = useState<number>();

    const [response, setResponse] = useState<string>("");

    const generatePrompt = (): string => {
        return (
            `Based on the following details about a trip, generate a list of comma-separated categories that could influence budget planning of the user. Details are: \n` +
            `- Visiting: ${destination}\n` +
            `- Travel purpose: ${purpose}\n` +
            `- Languages spoken: ${languages}\n` +
            `- Age: ${age}\n` +
            `- Planned stay duration: ${duration} days\n` +
            `- Places of interest: ${locations}\n` +
            `- Budget: ${budget} dollars\n` +
            `- Specific needs: ${needs}\n` +
            `- Hobbies: ${interests}\n` +
            `- Dietary restrictions: ${dietaryInfo}\n\n` +
            `Use the information to identify categories such as lodging, transportation, food, activities, and any special requirements based on the dietary restrictions or needs. The list should directly reflect factors that would affect the overall budget for the trip.\n\n` +
            `For example, if the traveler is interested in "history and museums" and has a "gluten-free diet", the categories could include "museum tickets, gluten-free dining options". Include any category that you think is relevant based on the provided trip details.`
        )
    }    

    /** 
     * <br></br>
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
                    <Form.Group controlId="stateReligiousBeliefs">
                        <li>
                            <Form.Label>Is there anything you would like to share about your religious beliefs?</Form.Label>
                            <Form.Control
                                value={beliefs}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBeliefs(event.target.value)}>
                            </Form.Control>
                        </li>
                    </Form.Group>
     */

    return (
        <div className="list-container">
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
                            <Form.Label>What is the purpose of your travel?</Form.Label>
                            <Form.Control
                                value={purpose}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                            </Form.Control>
                        </li>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="howLongStaying">
                        <li>
                            <Form.Label>How long are you planning to stay? (in days) </Form.Label>
                            <Form.Control
                                type="number"
                                value={duration}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDuration(event.target.value)}>
                            </Form.Control>
                        </li>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="budgetForTrip">
                        <li>
                            <Form.Label>What is your budget for this trip? (in $) </Form.Label>
                            <Form.Control
                                type="number"
                                value={budget}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBudget(parseInt(event.target.value))}>
                            </Form.Control>
                        </li>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="langueage">
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
                <Response 
                    prompt={generatePrompt()}
                    nextQuestion={response}
                    setNextQuestion={setResponse}
                />
                <Budget
                    categories={response}
                ></Budget>
            </div>
    )
}