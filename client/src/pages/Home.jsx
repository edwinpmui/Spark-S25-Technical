import React from 'react';
import ChoreCard from '../components/ChoreCard';
import './css/Home.css';

const Home = ({ chores, setChores }) => {

    const toggleCompletion = (id) => {
        setChores(chores.map(chore =>
            chore.id === id ? { ...chore, completed: !chore.completed } : chore
        ));
    };

    const deleteChore = (id) => {
        setChores(chores.filter(chore => chore.id !== id));
    };

    return (
        <div className="home">
            <h1>Chore List</h1>
            <div className="chore-grid">
                {chores.map(chore => (
                    <ChoreCard
                        key={chore.id}
                        title={chore.title}
                        description={chore.description}
                        assignedPersons={chore.assignedTo}
                        dateCreated={chore.dateCreated}
                        nextOccurrence={chore.nextOccurrence}
                        completed={chore.completed}
                        toggleCompletion={() => toggleCompletion(chore.id)}
                        deleteChore={() => deleteChore(chore.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;