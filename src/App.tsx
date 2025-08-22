import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");

  const [result, setResult] = useState({});

  useEffect(() => {
    if (!text) return;
    fetch("http://localhost:8000/tok?text=" + text)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, [text]);

  return (
    <div>
      <h1>Text Visual</h1>
      <textarea
        name="text"
        id=""
        rows={10}
        cols={50}
        value={text}
        style={{ width: "100%", height: "100%" }}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div>{result?.tok?.map((item: any) => item.word).join(" ")}</div>
    </div>
  );
}

export default App;
