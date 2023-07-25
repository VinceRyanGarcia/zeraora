import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
    <Canvas
      camera={{
        fov: 23,
        position: [1.6, -6,3.3],
      }}
    >
      <Experience />
    </Canvas>
    </>
  );
}

export default App;