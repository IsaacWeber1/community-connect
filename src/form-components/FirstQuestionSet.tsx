import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

export function FirstQuestionSet(): JSX.Element {
    return (
        <Form.Group controlId="reasonForTrip">
            <Form.Label>What is you reason for visiting?</Form.Label>
        </Form.Group>
    )
}