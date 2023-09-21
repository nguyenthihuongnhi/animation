/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import anime from "animejs";
import companyLogo from "/images/company-logo.png";
import towerImg from "/images/tower.avif";
import teamworkImg from "/images/teamwork.avif";
import "./App.css";

function Title(props) {
  const { text } = props;
  return (
    <div className="term-hidden absolute-center z-[5] text-white font-bold">
      <h1 className="text-center text-9xl">{text}</h1>
      <SquareSmall />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute z-[1] w-full py-4 term-hidden">
      <nav className="flex items-center justify-center gap-32">
        <div className="w-[50px] h-[50px]">
          <img src={companyLogo} alt="Monstarlab Yellow" />
        </div>
        <ul className="flex justify-center gap-10 font-bold text-white">
          <li>Home</li>
          <li>Project</li>
          <li>Contact</li>
          <li>Map</li>
        </ul>
      </nav>
    </header>
  );
}

function Background(props) {
  const { bgImg } = props;
  return (
    <div className="w-full h-full overflow-hidden">
      <img
        className="object-cover w-full h-full bg-custom"
        src={bgImg}
        alt="Vite logo"
        loading="lazy"
      />
    </div>
  );
}

function Square() {
  useEffect(() => {
    const animation = anime.timeline({
      easing: "easeInOutQuad",
      duration: 500,
    });

    animation
      .add({
        targets: ".translate-square",
        height: {
          value: "100%",
          duration: 500,
        },
      })
      .add({
        targets: ".square",
        width: [100, 0],
        opacity: [1, 0],
        complete: () => {
          anime({
            targets: ".term-hidden",
            opacity: [0, 1],
            duration: 1000,
            easing: "linear",
          });
        },
      });
  }, []);

  return (
    <div className="w-[200px] h-[200px] absolute-center zoom-square z-10">
      <div className="relative w-full h-0 overflow-hidden translate-square">
        <div className="bg-yellow-500 square"></div>
        <div className="absolute top-0 right-0 bg-yellow-500 square"></div>
        <div className="absolute bottom-0 left-0 bg-yellow-500 square"></div>
        <div className="absolute bottom-0 right-0 bg-yellow-500 square"></div>
      </div>
    </div>
  );
}

function SquareSmall() {
  useEffect(() => {
    anime({
      targets: ".translate-square-small",
      delay: 1000,
      height: {
        value: "50px",
        duration: 2000,
      },
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className="w-[50px] h-0 absolute z-10 left-1/2 -translate-x-[50%]">
      <div className="relative w-full h-0 overflow-hidden bg-yellow-500 translate-square-small"></div>
    </div>
  );
}

function App() {
  const [bgImg, setBgImg] = useState(towerImg);
  const [icon, setIcon] = useState(true);
  const [text, setText] = useState("The Art Of Change");

  // useEffect(() => {
  //   const animation = anime({
  //     targets: ".bg-custom",
  //     scale: [1.5, 1],
  //     duration: 1000,
  //     easing: "linear",
  //     complete: () => {
  //       anime({
  //         targets: ".term-hidden",
  //         opacity: 0,
  //         duration: 0,
  //       });
  //     },
  //   });

  //   animation.finished.then(() => {
  //     setBgImg(() => teamworkImg);
  //     setIcon(false);
  //     setText("Changi Airport ");
  //   });
  // }, []);

  useEffect(() => {
    anime({
      targets: ".term-hidden",
      opacity: 0,
      duration: 0,
    });
  }, []);

  return (
    <div>
      <div className="relative h-screen">
        <Header />
        <Title text={text} />
        {icon ? <Square /> : null}
        <Background bgImg={bgImg} />
      </div>
    </div>
  );
}

export default App;
