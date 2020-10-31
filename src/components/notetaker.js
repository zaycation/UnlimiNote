import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "../App.css";

function NotesTaker() {
  const [notes, setNotes] = useState([
    {
      title: "First Note",
      description: "This is my first note i've ever made",
      priority: "Critical",
    },
    {
      title: "Second Note",
      description: "This is my 2nd note i've ever made",
      flair: "Normal",
    },
  ]);

  const [form, setForm] = useState({ title: "", description: "", priority: "" });

  const handleChange = (event) => {
    console.log(event);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      { title: form.title, description: form.description, priority: form.priority },
    ]);
    setForm({ title: "", description: "", priority: "" });
  };

  return (
    <div className="App">
      <div>
        {notes.map((note) => {
          return (
            <div>
              <div>{note.title}</div>
              <div>{note.description}</div>
              <div>{note.priority}</div>
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
        <label>Unique Priority Tag</label>
        <input
          name="priority"
          type="text"
          value={form.priority}
          onChange={(value) => handleChange(value)}
        />
        <br />
        <ButtonGroup>
          <Button>Low</Button>
          <Button>Medium</Button>
          <Button>High</Button>
        </ButtonGroup>
        <br />
        <br />
        <Button outline type="submit" value="Submit">
          Add Note
        </Button>
      </form>
    </div>
  );
}

export default NotesTaker;
