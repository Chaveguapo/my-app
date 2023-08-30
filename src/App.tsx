import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    alert("You have submitted the form");
  };

  return (
    <div className="wrapper">
      <h1>Enter your Name</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
