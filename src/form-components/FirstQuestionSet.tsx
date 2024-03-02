import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function FirstQuestionSet(): JSX.Element {

    const [purpose, setPurpose] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [needs, setNeeds] = useState<string>("");
    const [locations, setLocations] = useState<string>("");
    const [previouslyBeen, setPreviouslyBeen] = useState<boolean>(false);
    const [age, setAge] = useState<number>(0);
    const [interests, setInterests] = useState<string>();
    const [origin, setOrigin] = useState<string>();
    const [dietaryInfo, setDietaryInfo] = useState<string>();
    const [bugdet, setBudget] = useState<number>(0);

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
            <Form.Group controlId="howLongStaying">
                <Form.Label>How long are you staying?</Form.Label>
                <Form.Control
                type="number"
                value={duration}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDuration(parseInt(event.target.value))}>
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
            <Form.Group controlId="ageOfUser">
                <Form.Label>How old are you?</Form.Label>
                <Form.Control
                type="number"
                value={age}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
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
            <hr></hr>
            <Form.Group controlId="budgetForTrip">
                <Form.Label>What is your budget?</Form.Label>
                <Form.Control
                type="number"
                value={bugdet}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setBudget(parseInt(event.target.value))}>
                </Form.Control>
            </Form.Group>
        </>
    )
}