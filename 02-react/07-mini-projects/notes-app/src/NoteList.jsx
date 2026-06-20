// receives filtered notes array, maps through, renders NoteItem

import NoteItem from "./NoteItem";

function NoteList({ notes, dispatch }) {
  return (
    <>
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} dispatch={dispatch} />;
      })}
    </>
  );
}
export default NoteList;
