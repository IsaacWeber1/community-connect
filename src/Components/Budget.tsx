import React, { useState } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';

export function Budget(): JSX.Element {
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
    /** 
     * <div>
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
     */
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