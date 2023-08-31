import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [enteredText, setEnteredText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const textChangeHandler = (i: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnteredText(i.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedText(enteredText);
    setEnteredText(" ");
  };

  return (
    <div className="container">
      <h1>Enter your Name</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input
              type="text"
              value={enteredText}
              onChange={textChangeHandler}
              className="input"
            />
          </label>
        </fieldset>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {submittedText && <p>You just typed {submittedText.toUpperCase()}</p>}
    </div>
  );
}

export default App;
