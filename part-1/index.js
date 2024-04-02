const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="David" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));