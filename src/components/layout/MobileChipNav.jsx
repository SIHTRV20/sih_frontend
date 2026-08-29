import React from "react";
import Chip from "../ui/Chip";
import { C } from "../../theme";

export default function MobileChipNav({ nav, screen, accent, onSelectScreen }) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b px-4 py-2.5 md:hidden" style={{ borderColor: C.border, background: C.surface }}>
      {nav.map((item) => (
        <Chip key={item.id} active={screen === item.id} accent={accent} onClick={() => onSelectScreen(item.id)}>
          {item.label}
        </Chip>
      ))}
    </div>
  );
}
