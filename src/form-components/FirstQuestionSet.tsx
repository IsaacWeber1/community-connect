import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function FirstQuestionSet(): JSX.Element {

    const [destination, setDestination]= useState<string>("");
    const [purpose, setPurpose] = useState<string>("");
    const [beliefs, setBeliefs] = useState<string>("");
    const [languages, setLanguages]= useState<string>("");
    const [travellerCount, setTravellerCount] = useState<number>(1);
    const [duration, setDuration] = useState<string>("");
    const [needs, setNeeds] = useState<string>("");
    const [locations, setLocations] = useState<string>("");
    const [previouslyBeen, setPreviouslyBeen] = useState<boolean>(false);
    const [age, setAge] = useState<number>(0);
    const [interests, setInterests] = useState<string>();
    const [origin, setOrigin] = useState<string>();
    const [dietaryInfo, setDietaryInfo] = useState<string>();
    const [bugdet, setBudget] = useState<number>(0);

    return (
        <ol>
            <h4>We will ask a feq questions to ensure your trip is personalized to your preferences</h4>
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
                    <Form.Label>Is ther eanything you would like to share about your religious beliefs?</Form.Label>
                    <Form.Control
                    value={beliefs}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBeliefs(event.target.value)}>
                    </Form.Control>
                </li>
            </Form.Group>
            <br></br>
            <Form.Group controlId="numberTravellingWith">
                <li>
                    <Form.Label>How many people are you travelling with?</Form.Label>
                    <Form.Control
                    type="number"
                    value={travellerCount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTravellerCount(parseInt(event.target.value))}>
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
                    value={bugdet}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBudget(parseInt(event.target.value))}>
                    </Form.Control>
                </li>
            </Form.Group>
            <br></br>
            <Form.Group controlId="needs">
                <li>
                    <Form.Label>Do you have any specific needs? (Consider: food, phone, money, housing/lodging, job, language learning resources)</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
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
                    as="textarea"
                    value={locations}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLocations(event.target.value)}>
                    </Form.Control>
                </li>
            </Form.Group>
            <br></br>
            <Form.Group controlId="interests/hobbies">
                <li>
                    <Form.Label>What are your interests/hobbies?</Form.Label>
                    <Form.Control
                    type="textarea"
                    value={interests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInterests(event.target.value)}>
                    </Form.Control>
                </li>
            </Form.Group>            
            <br></br>
            <Form.Group controlId="hasDietaryRestrictions">
                <li>
                    <Form.Label>Is ther eanything specific you hope to learn or discover while on your trip?</Form.Label>
                    <Form.Control
                    value={dietaryInfo}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDietaryInfo(event.target.value)}>
                    </Form.Control>
                </li>
            </Form.Group>
        </ol>
    )
}