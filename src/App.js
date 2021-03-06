import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "π": "Face with tears of joy",
  "π": "Friend love",
  "β€οΈ": "Real Heart",
  "π": "Nice",
  "βΊοΈ": "Cute Smile",
  "π": "winkling face",
  "π": "Normal Smile",
  "π": "Sad",
  "π": "Unamused Face"
};
//name=prompt("Enter Your name");
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiHandler} />
      <h2>"π β€οΈ π π π π βΊοΈ π "</h2>
      <h2>{meaning}</h2>
    </div>
  );
}
