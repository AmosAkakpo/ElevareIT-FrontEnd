import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiCanvas
} from "react-icons/si";

const tools = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "ReactJS", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Canvas", icon: SiCanvas }
];

export function ProgrammingTools() {
  return (
    <div className="w-full inline-flex flex-nowrap bg-gray-100 py-6">
      {/* First loop */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
        {tools.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Icon size={64} className="text-gray-600" title={name} />
          </li>
        ))}
      </ul>
      {/* Duplicate for seamless scroll */}
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
        aria-hidden="true"
      >
        {tools.map(({ name, icon: Icon }) => (
          <li key={name + "-clone"}>
            <Icon size={64} className="text-gray-600" title={name} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"
        aria-hidden="true"
      >
        {tools.map(({ name, icon: Icon }) => (
          <li key={name + "-clone"}>
            <Icon size={64} className="text-gray-600" title={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

