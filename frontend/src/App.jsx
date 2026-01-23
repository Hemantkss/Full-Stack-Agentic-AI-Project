import { Routes, Route } from "react-router-dom";

import ThreeCanvas from "./canvas/Canvas.jsx";
import { Leva } from "leva";
import { GuiStore } from "./gui/GuiStore";
import { GuiToggle } from "./gui/GuiToggle";

import Hero from "./pages/Hero.jsx";
import ChatSection from "./pages/ChatSection.jsx";

const App = () => {
  GuiToggle();
  const isOpen = GuiStore((s) => s.isOpen);

  return (
    <>
      {/* Global GUI */}
      <Leva hidden={isOpen} collapsed={isOpen} />

      {/* Persistent 3D Background */}
      <ThreeCanvas />

      {/* UI Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/chat" element={<ChatSection />} />
      </Routes>
    </>
  );
};

export default App;
