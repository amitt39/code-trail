// single note, shows title + content, Delete and Edit buttons

import { useRef, useState } from "react";

function NoteItem({ note, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  return (
    <>
      <div className="note-card">
        <div className="note-card-body">
          <h4 className="note-title">
            {isEditing ? (
              <div className="edit-field-wrap">
                <input
                  className="edit-input"
                  ref={titleInputRef}
                  type="text"
                  defaultValue={note.title}
                />
              </div>
            ) : (
              note.title
            )}
          </h4>
          <p className="note-content">
            {isEditing ? (
              <input
                className="edit-input"
                ref={contentInputRef}
                type="text"
                defaultValue={note.content}
              />
            ) : (
              note.content
            )}
          </p>
        </div>
        <div className="note-actions">
          {isEditing ? (
            <button
              className="action-button"
              onClick={() => {
                dispatch({
                  type: "edit-note",
                  id: note.id,
                  title: titleInputRef.current.value,
                  content: contentInputRef.current.value,
                });
                setIsEditing(false);
              }}
            >
              save
            </button>
          ) : (
            <button
              className="action-button"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
          )}

          <button
            className="action-button action-button-danger"
            onClick={() => {
              dispatch({ type: "delete-note", id: note.id });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
