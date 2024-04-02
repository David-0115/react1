const App = () => (
    <div>
        <Tweet username="dmarrow" name="David" date="04/02/2024" message="Hi, this is a tweet!" />
        <Tweet username="mads" name="Madelyn" date="04/02/2024" message="Hi, this is also a tweet!" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"))