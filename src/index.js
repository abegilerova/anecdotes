import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NextAnecdote from './components/NextAnecdote';
import Vote from './components/Vote';

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [voteCount, setVoteCount] = useState(new Array(props.anecdotes.length).fill(0));

    console.log(typeof voteCount);
    console.log(voteCount.length);

    function randomIntFromInterval(min, max) { // min and max included 
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        console.log('random', result)
        console.log('type', typeof result)

        return result;
    }

    const generateNextAnecdote = (value) => {

        setSelected(value);

    }

    const updateVoteCount = (value) => {
        const copy = { ...voteCount };
        copy[value] += 1;

        setVoteCount(copy);



    }




    console.log(voteCount);


    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <div>
                <Vote handleVote={updateVoteCount(selected)} numberOfVotes={voteCount[selected]} />
                <NextAnecdote handleClick={() => generateNextAnecdote(randomIntFromInterval(0, anecdotes.length - 1))} />
            </div>
            <h1>Anecdote with most votes</h1>
            <div> {props.anecdotes[voteCount.indexOf(Math.max(...voteCount))]} </div>
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

