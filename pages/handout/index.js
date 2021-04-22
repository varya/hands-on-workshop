import React from "react";

import Hero from "@components/hero";
import Card from "@components/card";
import Ribbon from "@components/ribbon";
import Link from "next/link";
import ToastIcon from "../../public/toast.svg";
import ComponentsIcon from "../../public/web-design.svg";
import BoxIcon from "../../public/package.svg";
import CodingIcon from "../../public/coding.svg";
import LegoIcon from "../../public/blocks.svg";
import FeedbackIcon from "../../public/chat-box.svg";
import DeploymentIcon from "../../public/deployment.svg";
import TestingIcon from "../../public/testing.svg";
import SyncIcon from "../../public/sync.svg";
import SetupIcon from "../../public/setup.svg";
import FlagIcon from "../../public/flag.svg";
import CheckList from "../../public/check-list.svg";
import Sketch from "../../public/sketch2.svg";
import SettingsIcon from "../../public/settings.svg";
import Flow from "../../public/flow.svg";


const pathPrefix = "/handout";
const blocks = [
  {
    title: "Workshop flow",
    image: Flow,
    slug: "workshop-flow",
    roles: [],
  },
  {
    title: "Making a toast",
    image: ToastIcon,
    slug: "toast",
    roles: ["designer", "developer"],
  },
  {
    title: "Figma setup",
    image: SettingsIcon,
    slug: "figma-setup",
    roles: ["designer"],
  },
  {
    title: "Repository setup",
    image: SetupIcon,
    slug: "repo-setup",
    roles: ["developer"],
  },
  {
    title: "UI inventory",
    image: BoxIcon,
    slug: "ui-inventory",
    roles: ["developer", "designer"],
  },
  {
    title: "Design tokens",
    image: Sketch,
    slug: "design-tokens",
    roles: ["designer"],
  },
  {
    title: "Coding the library",
    image: CodingIcon,
    slug: "coding-library",
    roles: ["developer"],
  },
  {
    title: "Releasing the library",
    image: FlagIcon,
    slug: "releasing-library",
    roles: ["developer"],
  },
  {
    title: "Product update",
    image: ComponentsIcon,
    slug: "product-update",
    roles: ["developer"],
  },
  {
    title: "Design Changes",
    image: LegoIcon,
    slug: "re-design",
    roles: ["designer", "developer"],
  },
  {
    title: "Cast in code",
    image: CheckList,
    slug: "library-update",
    roles: ["developer"],
  },
  {
    title: "Product release",
    image: DeploymentIcon,
    slug: "product-release",
    roles: ["developer"],
  },
  {
    title: "Visual regression tests",
    image: TestingIcon,
    slug: "visual-tests",
    roles: ["developer"],
  },
  {
    title: "Automatic syncronizations",
    image: SyncIcon,
    slug: "autosync",
    roles: ["developer"],
  },
  {
    title: "Feedback Form",
    image: FeedbackIcon,
    slug: "feedback",
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSfdIs-UqbZNU5asS3z_YlREEqYmgfYGfL53McjiBAlcB6YfoA/viewform?usp=sf_link",
    roles: ["designer", "developer"],
  },
]

export default function HandoutPage() {
  return (
    <>
      <Hero>
        <h2 className="text-2xl text-bold">
          Welcome to Hands-on with Design Systems workshop!
        </h2>
      </Hero>
      {/* CARDS SECTION */}
      <div className="flex-1 w-full h-full bg-gray-200">
        <div className="container flex flex-wrap max-w-5xl m-8 mx-auto">
          {blocks.map((block) => {
            const link = block.url ? block.url : `${pathPrefix}/${block.slug}`;
            return (
              <Card key={block.slug} className="sm:w-1/2 md:w-1/3 group">
                <div className="w-full h-full px-16 pt-4 pb-8 md:px-8">
                  {<block.image className="w-full h-full p-2" />}
                </div>
                <Link href={link}>
                  <a className="absolute top-0 left-0 w-full h-full cursor-pointer ">
                    <div className="flex items-center justify-center w-full h-full text-lg text-center text-white uppercase transition duration-300 bg-gray-700 opacity-90 group-hover:bg-transparent text-bold group-hover:transform group-hover:-translate-y-1/1 group-hover:text-transparent">
                      <div>{block.title}</div>
                    </div>
                  </a>
                </Link>
                {block.roles.map((r) => (
                  <Ribbon key={r} role={r} />
                ))}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
