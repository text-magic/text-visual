import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/editor")({
  component: Editor,
});

function Editor() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.currentTarget, e.target);
  };

  return (
    <div className="max-w-4xl mx-auto m-6">
      <div
        className="editor border p-2"
        contentEditable
        onMouseMove={handleMouseMove}
      >
        你可能不知道自己要的是什麼， 但是， 要先知道自己，不要什麼
      </div>
    </div>
  );
}
