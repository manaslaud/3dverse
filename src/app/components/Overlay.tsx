import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { ReactNode } from "react";

type SectionProps = {
    right: boolean;
    opacity: number;
    children: ReactNode;
  };

const Section = (props: SectionProps) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center px-5 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-4 py-2">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
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
      <div className="w-screen absolute">
        <Section right={false} opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl text-black">
            Hello,I&apos;m Manas
          </h1>
          <p className="text-gray-500 font-medium">I&apos;m a:</p>
          <ul className="leading-9">
            <li className="text-gray-500">🧑‍💻 Frontend Developer </li>
            <li className="text-gray-500">🧑‍🏫 3D Artist </li>
            <li className="text-gray-500">📦 UI/UX Designer</li>
          </ul>
          <p className="animate-bounce text-black text-[25px]">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl text-black">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b className="text-gray-500">Frontend🚀</b>
          </p>
          <ul className="leading-9">
            <li className="text-gray-500">NextJs</li>
            <li className="text-gray-500" >Tailwind</li>
            <li className="text-gray-500">Three.js</li>
            <li className="text-gray-500">React Three Fiber</li>
          </ul>
          <p className="mt-3">
            <b className="text-gray-500">Design 🔬</b>
          </p>
          <ul className="leading-9">
            <li className="text-gray-500">Blender</li>
            <li className="text-gray-500">Figma</li>
          </ul>
          <p className="animate-bounce text-black text-[25px]">↓</p>
        </Section>
        <Section right={false} opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl text-black">
            🤙 Get In Touch
          </h1>
          <p className="text-gray-500 mt-2">
            Let&apos;s Connect
          </p>
          <p className="mt-2 p-3 bg-slate-200 text-black font-semibold rounded-lg">
          💯 <a href="https://animation-text-6a3s.vercel.app/">Projects</a>
          </p>
          <p className="mt-2 p-3 bg-slate-200 text-black font-semibold rounded-lg">
            🥇<a href="https://github.com/manaslaud">Github</a>
            
          </p>
          <p className="mt-2 p-3 bg-slate-200 text-black font-semibold rounded-lg">
          🥈<a href="https://www.linkedin.com/in/manas-laud-5183a5254/">Linkedin</a>
          </p>
          <p className="mt-2 p-3 bg-slate-200 text-black font-semibold rounded-lg">
          🥉<a href="https://www.behance.net/manaslaud">Behance</a>
          </p>
         
        </Section>
      </div>
    </Scroll>
  );
};