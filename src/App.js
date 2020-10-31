//react notes app

import React from "react";
import NavbarHeader from "./components/navbar";
import NotesTaker from "./components/notetaker";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarHeader />
      <div className="App">
        <div>
          <NotesTaker />
        </div>
      </div>
    </div>
  );
}

export default App;
