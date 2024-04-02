const Tweet = ({ username, name, date, message }) => (
    <div className="tweet">
        <div className="user-container">
            <span className="user">User:{username}</span>
            <span className="name">Name: {name}</span>
        </div>
        <div className="container"><p className="msg">{message}</p></div>
        <div className="container"><span className="date">Date:{date}</span></div>
    </div>
);