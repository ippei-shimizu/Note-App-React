import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NOTE</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note" key={note.id}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p>{note.content}</p>
            <small>{note.modDate}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
