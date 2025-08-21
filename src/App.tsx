import "./App.css";

import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
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
      </div>
    </>
  );
}

export default App;
