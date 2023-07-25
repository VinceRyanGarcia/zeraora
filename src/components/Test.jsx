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
          <div className="bg-white  rounded-lg px-8 py-12">
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
            hello, i'm vince
          </h1>
          <p >↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1>
            christ i need better hobbies
          </h1>
          <p>
            <b>things i'm good at</b>
          </p>
          <ul>
            <li>coding shit</li>
            <li>graphic design shit</li>
            <li>sleeping</li>
            <li>and other duties as assigned</li>
          </ul>
          <p >↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>
            hire me?
          </h1>
          <p>
            i'm expensive af.
          </p>
          <p>
            <a href="tel:(333)333-3333">(333) 333-3333</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};