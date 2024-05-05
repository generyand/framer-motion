import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import BasicsOfMotion from "./components/BasicsOfMotion";
import Gestures from "./components/Gestures";
import AnimationControls from "./components/AnimationControls";
import ViewBasedAnimations from "./components/ViewBasedAnimations";
import ScrollAnimations from "./components/ScrollAnimations";

function App() {
  return (
    <>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollAnimations />
    </>
  );
}

export default App;
