import React from 'react';

function Passed({ yesses }) {
    return (
        <h2>3. You passed the audition with {yesses} yes votes. You're going to the next round!</h2>
    );
} // function for passing 

function Failed() {
    return (
        <h3>3. Try again later!</h3>
    );
} // function for failing 

export default function TernaryOperators({ x }) {
    return (
        <>
            {x >= 3 ? <Passed yesses={x} /> : <Failed />}
        </>
    );
} // function for computation of yesses if it pass the 3 yesses
