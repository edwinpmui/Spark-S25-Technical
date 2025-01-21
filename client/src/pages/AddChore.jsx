import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AddChore.css';

const AddChore = ({ addChore }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [nextOccurrence, setNextOccurrence] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDateCreated(today);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newChore = {
            id: Date.now(),
            title,
            description,
            assignedTo: [assignedTo],
            dateCreated,
            nextOccurrence,
            completed: false,
        };
        addChore(newChore);
        navigate('/');
    };

    return (
        <div className="add-chore-container">
            <h1>Add Chore</h1>
            <form onSubmit={handleSubmit} className="add-chore-form">
                <div className="form-group">
                    <label>Chore Name:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description (optional):</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Assign to:</label>
                    <select
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        required
                    >
                        <option value="">Select a person</option>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                        <option value="Charlie">Charlie</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Next Occurrence:</label>
                    <input
                        type="date"
                        value={nextOccurrence}
                        onChange={(e) => setNextOccurrence(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Add Chore</button>
            </form>
        </div>
    );
};

export default AddChore;