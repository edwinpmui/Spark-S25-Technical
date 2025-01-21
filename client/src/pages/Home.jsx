import React, { useEffect, useState } from 'react';
import ChoreCard from '../components/ChoreCard';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './css/Home.css';

const Home = ({ setChores }) => {
    const { currentUser } = useAuth();
    const [chores, setChoresState] = useState([]);

    useEffect(() => {
        const fetchChores = async () => {
            if (currentUser) {
                const q = query(collection(db, 'chores'), where('userId', '==', currentUser.uid));
                const querySnapshot = await getDocs(q);
                const choresData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setChoresState(choresData);
                setChores(choresData); // Update the parent state as well
            }
        };

        fetchChores();
    }, [currentUser, setChores]);

    const toggleCompletion = (id) => {
        setChoresState(chores.map(chore =>
            chore.id === id ? { ...chore, completed: !chore.completed } : chore
        ));
    };

    const deleteChore = (id) => {
        setChoresState(chores.filter(chore => chore.id !== id));
    };

    return (
        <div className="home">
            <h1>Chore List</h1>
            {chores.length === 0 ? (
                <p>No chores found, add a chore!</p>
            ) : (
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
            )}
        </div>
    );
};

export default Home;