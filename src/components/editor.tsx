import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";

export default function Editor() {
  const editorRef = useRef<EditorJS>(null);

  useEffect(() => {
    const editor = new EditorJS({
      holder: "editor",
    });
    editorRef.current = editor;
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
}
