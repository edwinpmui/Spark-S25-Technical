import React, { useState, useEffect } from 'react';
import './css/ChoreCard.css'

const ChoreCard = ({ title, description, assignedPersons = [], dateCreated, nextOccurrence, completed, toggleCompletion, deleteChore }) => {
    const [isCompleted, setIsCompleted] = useState(completed);
    const [completedBy, setCompletedBy] = useState('');
    const [daysUntilNext, setDaysUntilNext] = useState(0);

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
        toggleCompletion();
        if (!isCompleted) {
            setCompletedBy('User'); // Replace 'User' with the actual user completing the chore
        } else {
            setCompletedBy('');
        }
    };

    useEffect(() => {
        const calculateDaysUntilNext = () => {
            const now = new Date();
            const nextDate = new Date(nextOccurrence);
            const timeDiff = nextDate - now;
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            setDaysUntilNext(daysDiff);
        };

        calculateDaysUntilNext();
    }, [nextOccurrence]);

    useEffect(() => {
        if (isCompleted) {
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
            const timeUntilEndOfDay = endOfDay - now;

            const timer = setTimeout(() => {
                deleteChore();
            }, timeUntilEndOfDay);

            return () => clearTimeout(timer);
        }
    }, [isCompleted, deleteChore]);

    return (
        <div className={`chore-card ${isCompleted ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Assigned to: {assignedPersons.join(', ')}</p>
            <p>Date Created: {dateCreated}</p>
            <p>Next Occurrence: {nextOccurrence} ({daysUntilNext} days left)</p>
            {isCompleted && <p>Completed by: {completedBy}</p>}
            <button onClick={deleteChore} className="delete-button">Delete</button>
        </div>
    );
};

export default ChoreCard;