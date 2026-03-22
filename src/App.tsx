import React, { useState } from "react";
import Sidebar from "./components/sidebar";

export default function App() {
  const [activeFolder, setActiveFolder] = useState("inbox");

  return (
    <div className="app-layout" style={{ display: "flex" }}>
      <Sidebar active={activeFolder} onSelect={setActiveFolder} />

      <main style={{ flex: 1, padding: "20px" }}>
        {/* Render content based on activeFolder */}
        {activeFolder === "inbox" && <InboxView />}
        {activeFolder === "sent" && <SentView />}
        {activeFolder === "drafts" && <DraftsView />}
        {activeFolder === "trash" && <TrashView />}
      </main>
    </div>
  );
}
