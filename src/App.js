import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="App">
      <p>
        <FormattedMessage
          id="app.text"
          defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
          description="Welcome header on app main page"
          values={{ what: "react-intl" }}
        />
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage
          id="app.learn-react-link"
          defaultMessage="Learn React"
          description="Link on react page"
        />
      </a>
    </div>
  );
}

export default App;
