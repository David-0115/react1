const Person = ({ name, age, hobbies }) => {
    const voteMsg = age >= 18 ? "Please go vote" : "You must be 18 to vote";
    const dispName = name.length <= 8 ? name : name.slice(0, 8);
    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {dispName}</li>
                <li>Age: {age}</li>
                <li>Hobbies: <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul></li>
            </ul>
            <h3>{voteMsg}</h3>

        </div>
    );
}

