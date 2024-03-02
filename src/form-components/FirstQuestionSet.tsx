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
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="reasonForTrip">
                <Form.Label>What is you reason for visiting?</Form.Label>
                <Form.Control
                value={purpose}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
                </Form.Control>
            </Form.Group>
        </>
    )
}