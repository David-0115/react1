const App = () => (
    <div>
        <Person name="David" age={46} hobbies={['kayaking', 'hiking', 'coding']} />
        <Person name="Madelyn" age={8} hobbies={['hiking', 'minecraft', 'playing with toys']} />
        <Person name="Alexander" age={22} hobbies={['gaming']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));