//  title + content inputs, Add button, dispatches add-note

import { useRef } from "react";

function NoteInput({ dispatch }) {
  const titleRef = useRef();
  const contentRef = useRef();

  return (
    <>
      <input
        className="note-input note-input-title"
        ref={titleRef}
        type="text"
        name="title"
        id=""
        placeholder="title"
      />
      <input
        className="note-input note-input-content"
        ref={contentRef}
        type="text"
        name="content"
        id=""
        placeholder="content"
      />
      <button
        className="note-button"
        onClick={() => {
          let title = titleRef.current.value;
          let content = contentRef.current.value;

          dispatch({ type: "add-note", title: title, content: content });
          titleRef.current.value = "";
          contentRef.current.value = "";
        }}
      >
        Add Note
      </button>
    </>
  );
}

export default NoteInput;
