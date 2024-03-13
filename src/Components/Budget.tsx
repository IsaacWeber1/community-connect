import React, { useState } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

export function Budget({
    categories
}: {
    categories: string
}): JSX.Element {
    const priorities = categories.split(",");
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
        <div>
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
    )
}