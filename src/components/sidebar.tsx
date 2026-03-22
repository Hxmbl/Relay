import React from "react";

type SidebarItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
};

const items: SidebarItem[] = [
  { id: "inbox", label: "Inbox" },
  { id: "sent", label: "Sent" },
  { id: "drafts", label: "Drafts" },
  { id: "trash", label: "Trash" },
];

type Props = {
  active: string;
  onSelect: (id: string) => void;
};

export default function Sidebar({ active, onSelect }: Props) {
  return (
    <aside className="sidebar">
      {items.map((item) => (
        <div
          key={item.id}
          className={`sidebar-item ${active === item.id ? "active" : ""}`}
          onClick={() => onSelect(item.id)}
        >
          {/* If you want icons, you can add them here */}
          <span className="sidebar-label">{item.label}</span>
          {item.badge ? (
            <span className="sidebar-badge">{item.badge}</span>
          ) : null}
        </div>
      ))}
    </aside>
  );
}
