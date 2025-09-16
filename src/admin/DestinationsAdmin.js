// src/admin/DestinationsAdmin.js
import React, { useState } from "react";

export default function DestinationsAdmin() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  function add() {
    if (!name.trim()) return;
    setItems([...items, { id: Date.now(), name }]);
    setName("");
  }

  function remove(id) {
    setItems(items.filter(i => i.id !== id));
  }

  return (
    <div>
      <h2>Manage Destinations</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Destination name" />
        <button onClick={add}>Add</button>
      </div>

      <ul>
        {items.map(i => (
          <li key={i.id}>
            {i.name} <button onClick={()=>remove(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
