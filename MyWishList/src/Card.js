function Card({ name }) {
  const [count, setCount] = useState(0);
  const [hasLiked, sethasLiked] = useState(false);

  useEffect(() => {
    console.log(`${name} has been liked: ${hasLiked}`);
  });
  return (
    <div className="card-container" onClick={() => setCount(count + 1)}>
      <h2>
        {" "}
        {name} <br /> {count || null}
      </h2>
      <button onClick={() => sethasLiked(!hasLiked)}>
        {" "}
        {hasLiked ? "❤️" : "🤍"}{" "}
      </button>
    </div>
  );
}

export default Card;
