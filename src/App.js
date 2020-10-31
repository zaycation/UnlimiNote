//react counter app

import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "First Note",
      description: "This is my first note i've ever made",
      flair: "Critical",
    },
    {
      title: "Second Note",
      description: "This is my 2nd note i've ever made",
      flair: "Normal",
    },
  ]);

  const [form, setForm] = useState({ title: "", description: "", flair: "" });

  const handleChange = (event) => {
    console.log(event);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      { title: form.title, description: form.description, flair: form.flair },
    ]);
    setForm({ title: "", description: "", flair: "" });
  };

  return (
    <div className="App">
      <div>
        {notes.map((note) => {
          return (
            <div>
              <div>{note.title}</div>
              <div>{note.description}</div>
              <div>{note.flair}</div>
            </div>
          );
        })}
      </div>
      <form onSubmit={(values) => onSubmit(values)}>
        <label>Note Title</label>
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={(value) => handleChange(value)}
        />
        <br />
        <label>Description</label>
        <input
          name="description"
          type="text"
          value={form.description}
          onChange={(value) => handleChange(value)}
        />
        <br />
        <label>Unique Flair Tag</label>
        <input
          name="flair"
          type="text"
          value={form.flair}
          onChange={(value) => handleChange(value)}
        />
        <br />
        <button type="submit" value="Submit">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default App;
