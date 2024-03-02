import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function FirstQuestionSet(): JSX.Element {

    const [purpose, setPurpose] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [needs, setNeeds] = useState<string[]>([]);
    const [interests, setInterests] = useState<string[]>([]);
    const [previouslyBeen, setPreviouslyBeen] = useState<boolean>(false);
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
            
            <Form.Group controlId="reasonForTrip">
                <Form.Label>How long are you staying?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>Do you have any specific needs? (Consider: food, phone, money, housing/lodging, job, language learning resources)</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>If you are travelling for fun, are there specific locations or sites you are interested in visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>Have you previously travelled to this location?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>How old are you?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What are you interested in learning about?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>Where are you from?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>Do you have any dietary restrictions?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is your budget?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>
        </>
    )
}