import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function FirstQuestionSet(): JSX.Element {
    const [purpose, setPurpose] = useState<string>("");
    return (
        <Form.Group controlId="reasonForTrip">
            <Form.Label>What is you reason for visiting?</Form.Label>
            <Form.Control
            value={purpose}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPurpose(event.target.value)}>
            </Form.Control>
        </Form.Group>
    )
}