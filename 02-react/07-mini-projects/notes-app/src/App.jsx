// holds useReducer, filter state, passes dispatch down

import { useReducer, useState } from "react";
import "./App.css";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import SearchBar from "./SearchBar";

function reducer(state, action) {
  if (action.type === "add-note") {
    return [
      ...state,
      { id: Date.now(), title: action.title, content: action.content },
    ];
  }
  if (action.type === "delete-note") {
    return state.filter((note) => note.id !== action.id);
  }
  if (action.type === "edit-note") {
    return state.map((note) =>
      note.id === action.id
        ? { ...note, title: action.title, content: action.content }
        : note,
    );
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [searchText, setSearchText] = useState("");
  console.log("searchText", searchText);

  const filteredNotes = state.filter((note) => {
    return note.title.toLowerCase().includes(searchText.toLocaleLowerCase());
  });
  console.log("State", state);
  console.log("filteredNotes", filteredNotes);

  return (
    <>
      <NoteInput dispatch={dispatch} />
      <SearchBar notes={state} setSearchText={setSearchText} />
      <NoteList notes={filteredNotes} dispatch={dispatch} />
    </>
  );
}

export default App;
