import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function NotesTaker() {
  const [notes, setNotes] = useState([
    {
      title: "",
      subject: "",
      description: "",
      priority: "",
      color: "",
      attachment: "",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    subject: "",
    description: "",
    priority: "",
    color: "",
    attachment: "",
  });

  const handleChange = (event) => {
    console.log(event);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setNotes([
      ...notes,
      {
        title: form.title,
        subject: form.subject,
        description: form.description,
        priority: form.priority,
        color: form.color,
        attachment: form.attachment,
      },
    ]);
    setForm({ title: "", description: "", priority: "" });
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <div className="notes-form">
            <Form onSubmit={(values) => onSubmit(values)}>
              <FormGroup row>
                <Label for="Title" sm={2}>
                  Title
                </Label>
                <Col sm={10}>
                  <Input
                    type="title"
                    name="title"
                    id="title"
                    placeholder="Title of your note"
                    value={form.title}
                    onChange={(value) => handleChange(value)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="Subject" sm={2}>
                  Subject
                </Label>
                <Col sm={10}>
                  <Input
                    type="subject"
                    name="subject"
                    id="subject"
                    placeholder="Subject of your note"
                    value={form.subject}
                    onChange={(value) => handleChange(value)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="description" sm={2}>
                  Notes
                </Label>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Description of your notes"
                    value={form.description}
                    onChange={(value) => handleChange(value)}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="file" sm={2}>
                  Upload
                </Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    name="file"
                    id="exampleFile"
                    value={form.attachment}
                    onChange={(value) => handleChange(value)}
                  />
                  <FormText color="muted">
                    (Optional) Click above to attach a file with this note.
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup>
                <Label for="priority">Priority</Label>
                <Input
                  type="select"
                  name="priority"
                  id="priority"
                  value={form.priority}
                  onChange={(value) => handleChange(value)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </Input>
              </FormGroup>

              <FormGroup>
                <Label for="exampleColor">Color</Label>
                <Input
                  type="color"
                  name="color"
                  id="exampleColor"
                  value={form.color}
                  onChange={(value) => handleChange(value)}
                />
                <FormText color="muted">
                  (Optional) Assign a color to the note
                </FormText>
              </FormGroup>

              <FormGroup check row>
                <Col>
                  <Button outline type="submit" value="Submit">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>

          <br />
          
          <div className="notes-display">
            <h3>NOTES</h3>
            {notes.map((note) => {
              return (
                <div>
                  <div>
                    <h5>{note.title}</h5>
                  </div>
                  <div>
                    <p>{note.description}</p>
                  </div>
                  <div>{note.priority}</div>

                  <div>{note.color}</div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NotesTaker;
