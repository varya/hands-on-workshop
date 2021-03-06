import React from "react";

import Hero from "@components/hero";
import Card from "@components/card";
import Link from "next/link";
import ToastIcon from "../../public/toast.svg";
import ComponentsIcon from "../../public/web-design.svg";
import BoxIcon from "../../public/package.svg";
import MapIcon from "../../public/map.svg";
import LegoIcon from "../../public/blocks.svg";
import FeedbackIcon from "../../public/chat-box.svg";

const blocks = [
  { title: "Making a toast", image: ToastIcon, slug: "./toast" },
  { title: "Naming", image: ComponentsIcon, slug: "./naming" },
  { title: "UI Inventory", image: BoxIcon, slug: "./inventory" },
  { title: "Parts of design system", image: LegoIcon, slug: "./parts" },
  { title: "Pattern Journey", image: MapIcon, slug: "./journey" },
  { title: "Feedback Form", image: FeedbackIcon, slug: "./feedback" },
];

export default function HandoutPage() {
  return (
    <>
      <Hero>
        <h2 className="text-2xl text-bold">
          Welcome to Hands On with Design Systems workshop!
        </h2>
      </Hero>
      {/* CARDS SECTION */}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={block.slug}>
                  <div className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <a className="flex items-center justify-center w-full h-full text-lg text-center text-white uppercase transition duration-300 bg-gray-700 opacity-90 group-hover:bg-transparent text-bold group-hover:transform group-hover:-translate-y-1/1 group-hover:text-transparent">
                      <div>{block.title}</div>
                    </a>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
      {/* CARDS SECTION v2*/}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={block.slug}>
                  <div className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <a className="flex items-center justify-center w-full h-full text-lg text-center text-gray-900 uppercase transition duration-300 bg-white pointer-events-none opacity-90 group-hover:opacity-0 text-bold ">
                      <div>{block.title}</div>
                    </a>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
      {/* CARDS SECTION v3*/}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={block.slug}>
                  <div className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <a className="flex items-center justify-center w-full h-full text-lg text-center text-gray-900 uppercase transition duration-300 ease-in transform bg-v-yellow text-bold group-hover:transform group-hover:scale-50 group-hover:opacity-0 ">
                      <div>{block.title}</div>
                    </a>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
