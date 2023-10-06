import React from 'react';

function ResultsList({ names }) {
    console.log("Inside ResultsList", names);

    return (
        <ul id="resultsList">
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    );
}


export default ResultsList;