"use client";
import Image from "next/image";
import JollyOrpheusClick from "@/components/JollyOrpheusClick";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="">
      <main className="">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className={"text-6xl self-center my-10"}>Haxmas Day 1</h1>
          <p className={"text-3xl font-bold"}>Count: {count}</p>
          <JollyOrpheusClick
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </div>
      </main>
    </div>
  );
}
