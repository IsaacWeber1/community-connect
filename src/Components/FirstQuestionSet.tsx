import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CustomBudget } from "../Interfaces/CustomBudget";

export function FirstQuestionSet(): JSX.Element {

    const priorities = [
        "location of lodging", "how nice lodging is", "food",
        "culture", "history", "live music",
        "night life", "other (replace with anything else you want)"
    ];

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
    const [chosenPriorities, setChosenPriorities] = useState<string[]>([]);
    // const handleChangeSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    //     // ii have no idea what the line above means my ide auto changed it
    //     setSearch(e.target.value);
    // }

    const updatePriorities = (priority: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked
            ? setChosenPriorities([...chosenPriorities, priority])
            : setChosenPriorities(
                [...chosenPriorities].filter((chosenMember: string): boolean => chosenMember !== priority)
            )
    }
    const pushUp = (priority: string) => {
        const currIndex = chosenPriorities.findIndex((chosenMember: string): boolean => chosenMember === priority);
        if (currIndex > 0) {
            // Swap with the previous item
            const newPriorities = [...chosenPriorities];
            [newPriorities[currIndex - 1], newPriorities[currIndex]] = [newPriorities[currIndex], newPriorities[currIndex - 1]];
            setChosenPriorities(newPriorities);
        }
    }
    const pushDown = (priority: string) => {
        const currCount = chosenPriorities.reduce((count: number, chosenMember: string) => count += 1, 0);
        const currIndex = chosenPriorities.findIndex((chosenMember: string): boolean => chosenMember === priority);
        if (currIndex < (currCount - 1)) {
            // Swap with the previous item
            const newPriorities = [...chosenPriorities];
            [newPriorities[currIndex + 1], newPriorities[currIndex]] = [newPriorities[currIndex], newPriorities[currIndex + 1]];
            setChosenPriorities(newPriorities);
        }
    }



    return (
        <><div>
        <Row>
            <Col>
                <ul>
                    {priorities.map((priority) => (
                        <li key={priority}>
                            <Form.Check
                                type="checkbox"
                                id={priority}
                                label={priority}
                                onChange={updatePriorities(priority)}
                            />
                        </li>
                    ))}
                </ul>
            </Col>
            <Col>
                <div>
                    <h3>Configure Budget</h3>
                    <ol>
                        {chosenPriorities.map((priority) => (
                            <li key={priority}>
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => pushUp(priority)}
                                >⬆️</Button>
                                {' '}
                                <Button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() => pushDown(priority)}
                                >⬇️</Button>
                                {' '}
                                {priority}
                            </li>
                        ))}
                    </ol>
                </div>
            </Col>
        </Row>
    </div>
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
            </div></>
    )
}