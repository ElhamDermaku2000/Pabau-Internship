import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import useHistory from "use-history";
import "./App.css";

const Step1 = ({ onSelectOption }) => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div>
      <h2>Step 1/2</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={`/step2/${index}`} onClick={() => onSelectOption(option)}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Step2 = ({ selectedOption }) => (
  <div>
    <h2>Step 2/2</h2>
    <p>Selected Option: {selectedOption}</p>
  </div>
);

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();

  const onSelectOption = (option) => {
    setSelectedOption(option);
    history.push("/step2");
  };

  const onBackToStep1 = () => {
    setSelectedOption(null);
    history.push("/");
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>React Step App</h1>
        </header>
        <main>
          <Route
            path="/"
            exact
            render={() => <Step1 onSelectOption={onSelectOption} />}
          />
          <Route
            path="/step2"
            render={() => <Step2 selectedOption={selectedOption} />}
          />
        </main>
        <footer>
          <Route
            path="/step2"
            render={() => <button onClick={onBackToStep1}>Back to Step 1/2</button>}
          />
        </footer>
      </div>
    </Router>
  );
};

export default App;
