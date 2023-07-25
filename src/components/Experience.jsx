import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Zeraora } from "./Zeraora"
import { Test } from "./Test"

 
export const Experience = () => {
    return (
        <>
        <ambientLight intensity={.5}/>
            <OrbitControls enableZoom={false}/>
            <ScrollControls pages={1} damping={0.3}>
                <Zeraora/>
                <Test/>
            </ScrollControls>
        </> 
    )
} 