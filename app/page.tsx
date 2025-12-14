"use client";
import Image from "next/image";
import OrphClick from "@/components/OrphClick";
import { useEffect, useState } from "react";
import { Clicker_Script } from "next/font/google";

export default function Home() {
  const [count, setCount] = useState(0);
  const [clickers, setClickers] = useState(0);
  const [clickerPrice, setClickerPrice] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((p) => p + clickers);
    }, 1000);
    return () => clearInterval(interval); // if I don't do this, second one doubles with the first
  }, [clickers]);

  function buyClicker() {
    if (count >= clickerPrice) {
      setCount(count - clickerPrice);
      setClickers(clickers + 1);
      setClickerPrice(Math.round(clickerPrice * 1.2));
    }
  }

  return (
    <div className="bg-red-300 h-full">
      <main className="">
        <div className="text-black flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1</h1>
          <p className={"text-3xl font-bold"}>Count: {count}</p>
          <OrphClick
            onClick={() => {
              setCount(count + 1);
            }}
          />
          <div hidden={count < 5 && clickers == 0}>
            <OrphClick onClick={buyClicker} source="/yay.png"></OrphClick>
            <h1 className="h-1 text-4xl">
              buy a clicker for {clickerPrice}? you have {clickers} clickers
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
