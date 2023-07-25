import { Canvas } from "@react-three/fiber";
import "./App.css";
import "./index.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
    <Canvas
      camera={{
        fov: 25,
        position: [0, -8, 4.5],
      }}
    >
      <Experience />
    </Canvas>
    </>
  );
}

export default App;