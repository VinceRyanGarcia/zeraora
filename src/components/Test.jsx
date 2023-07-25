import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Test = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1>
            👋 hello, i'm vince
          </h1>
          <p>
            <b>rotate zeraora by clicking and dragging!</b>
          </p>
          <p >↓ scroll down for more information about me :)</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <p>
            <b>previously i've served as:</b>
          </p>
          <ul>
            <li>operations manager @ arc system works</li>
            <li>community manager @ kabam / netmarble</li>
            <li>community manager @ supercolony / vespa</li>
            <li>organized play coordinator @ konami</li>
            <li>event manager @ west coast gaming events</li>
            <li>tournament organizer @ oc dugout</li>
          </ul>
          <p >↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>
            hire me?
          </h1>
          <p>
            i'm excited to collaborate with you (:
          </p>
          <p>
            <a href="mailto:vinceryangarcia@gmail.com">email</a>
            <a href="http://www.linkedin.com/in/vlnce">linkedin</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};