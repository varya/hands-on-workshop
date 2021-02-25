import { useState } from "react";
import Nav from "@components/nav";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { HERO_HEIGHT } from "@components/hero";
export default function Header() {
  const [visible, setVisible] = useState(false);
  useScrollPosition(
    ({ currPos }) => {
      const shouldShow = Math.abs(currPos.y) > HERO_HEIGHT;
      if (shouldShow !== visible) setVisible(shouldShow);
    },
    [visible]
  );

  return (
    visible && (
      <header className="border-b">
        <Nav />
      </header>
    )
  );
}
