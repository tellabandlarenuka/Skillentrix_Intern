import "./styles.css";
import { useEffect, useState } from "react";

// import { Card } from "./Card";

function Card({ name }) {
  const [count, setCount] = useState(0);
  const [hasLiked, sethasLiked] = useState(false);

  useEffect(() => {
    console.log(`${name} has been liked: ${hasLiked}`);
  });
  return (
    <div className="card-container" onClick={() => setCount(count + 1)}>
      <h2> {name} </h2>
      <button onClick={() => sethasLiked(!hasLiked)}>
        {" "}
        {/* {hasLiked ? "❤️" : "🤍"} */}
        {hasLiked ? "Liked" : "Like"}{" "}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>My WatchList</h2>

      <Card name="Lenin" />

      <Card name="Happy Raj" />

      <Card name="RRR" />

      <Card name="Spirit" />

      <Card name="Premam" />

      <Card name="Peddi" />

      <Card name="Magadheera" />

      <Card name="Chennai Love Story" />

      <Card name="Love Today" />

      <Card name="Dark" />
    </div>
  );
}

export default App;
