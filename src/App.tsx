import React, { useState } from "react";
import "./App.css";
import Component from "./Components/Component";

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
      {submittedText ? <Component data={submittedText} /> : null}
    </div>
  );
}

export default App;
