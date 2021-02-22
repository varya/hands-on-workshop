import BlockImage from "@components/block-image";
import Hero from "@components/hero";
import SectionShape from "@components/section-shape";
import Avatar from "@components/avatar";
import Section from "@components/section";
import Card from "@components/card";
import Button from "@components/button";
import Timeline, { TimelineItem } from "@components/timeline";
import Testimonials, { TestimonialItem } from "@components/testimonials";
import DesignIcon from "../public/sketch.svg";
import DevIcon from "../public/web-development.svg";
import ProcessIcon from "../public/planning.svg";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import IBMLogo from "../public/IBM_logo.svg";
import SpotifyLogo from "../public/Spotify_logo.svg";
import AirbnbLogo from "../public/Airbnb_logo.svg";
import YandexLogo from "../public/Airbnb_logo.svg";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <Hero>
        <div className="flex flex-col w-full justify-center px-16 text-center container">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Hands-on with Design Systems
          </h1>
          <p className="leading-normal text-2xl mb-8">
            2-day workshop about building a design system with Figma and React
            in a team
          </p>
        </div>
        {/* <!--Left Col--> */}
        <div className="flex flex-col w-full md:w-6/12 justify-center items-center text-center md:text-left mt-12">
          <p className="uppercase tracking-loose w-full text-center">
            8-9 April 2021, 10-13 EET
          </p>
          <Button variant="base">Register</Button>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex flex-col w-full md:w-6/12 justify-center items-center text-center md:text-left">
          <p className="uppercase tracking-loose text-center w-full">
            15-16 April 2021, 10-13 EET
          </p>
          <Button variant="base">Register</Button>
        </div>
      </Hero>
      <SectionShape className="-mt-12 lg:-mt-24" />
      <Section>
        <div className=" text-gray-600 text-center tracking-wider my-8">
          <p className=" text-xl leading-8 my-4">
            This workshop helps you learn and practice design systems working in
            a team. You can join as a designer or developer.
          </p>
          <p className=" text-xl leading-8 my-4">
            The designers define visual design language and Figma components. At
            the same time, the developers create the components with React. You
            practice iterative component-driven design and development and
            create documentation along with making the product. The exercise
            contains managing collaborative updates and keeping the code in sync
            with the design reality.
          </p>
          <p className=" text-xl leading-8 my-4">
            By the end of the day, each team has a ready-to-use component
            library, an end product built out of that, and a tuned process to
            ensure smooth updates.
          </p>
        </div>
      </Section>
      <Section title="Workshop content">
        <h3 className="w-full font-bold text-gray-900 text-xl text-center py-8">
          April, 8
        </h3>
        <Timeline>
          <TimelineItem time="10:00" heading="Introduction">
            <ul className="list-disc list-inside">
              <li>What are design systems</li>
              <li>Technologies to support design systems</li>
            </ul>
          </TimelineItem>
          <TimelineItem time="11:00" heading="Design and Process">
            <ul className="list-disc list-inside">
              <li>UI inventory and scoping</li>
              <li>Coding first components together</li>
            </ul>
          </TimelineItem>
          <TimelineItem time="14:00" heading="End of first day" align="end" />
        </Timeline>
        <h3 className="w-full font-bold text-gray-900 text-xl text-center py-8">
          April, 9
        </h3>
        <Timeline>
          <TimelineItem time="10:00" heading="Production and Updates">
            <ul className="list-disc list-inside">
              <li>Coding the components</li>
            </ul>
          </TimelineItem>
          <TimelineItem time="10:00" heading="">
            <ul className="list-disc list-inside">
              <li>Coding the components</li>
              <li>Building the product</li>
              <li>Brand changes</li>
            </ul>
          </TimelineItem>
          <TimelineItem time="10:00" heading="" align="end">
            <ul className="list-disc list-inside">
              <li>Running through the processes</li>
            </ul>
          </TimelineItem>
        </Timeline>
      </Section>
      {/* CARDS SECTION */}
      <Section title="Why attend" className="bg-gray-100">
        <Card className="md:w-1/3">
          <DesignIcon className="w-full h-full px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li className="pb-2">Practice UI inventory </li>
            <li className="pb-2">Run brand-changes in nearly zero time</li>
            <li className="pb-2">
              Learn how to organize the components in Figma
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <DevIcon className="w-full h-full px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li className="pb-2">Component-driven development</li>
            <li className="pb-2">
              Learn tips and tricks of making a pattern library
            </li>
            <li className="pb-2">
              Practice React, Storybook, and styled-components
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <ProcessIcon className="w-full h-full px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li className="pb-2">Automate design and development processes</li>
            <li className="pb-2">
              Learn to work with a design system in a multifunctional team
            </li>
            <li className="pb-2">
              Practice DS development cycle: create, maintain and keep coherent
            </li>
          </ul>
        </Card>
      </Section>

      <Section title="Who we are">
        <BlockImage image={<Avatar src="/varya.jpg" alt="Varya avatar" />}>
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Varya Stepanova
          </h3>
          <p className="text-gray-600 mb-8">
            Design systems architect with an extensive experience in management,
            design, and technical side.
          </p>
          <div className="flex">
            <a
              className="mr-4 cursor-pointer flex"
              href="https://www.linkedin.com/in/varyastepanova/"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a href="https://twitter.com/varya_en">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
        <BlockImage
          reverse
          image={<Avatar src="/nikita.jpg" alt="Nikita avatar" />}
        >
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Nikita Sherbakov
          </h3>
          <p className="text-gray-600 mb-8">
            Software architect & senior frontend engineer
          </p>
          <div className="flex">
            <a
              className="mr-4 cursor-pointer flex"
              href="https://linkedin.com/in/nikita-sherbakov"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a href="https://twitter.com/sherbakovdev">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
      </Section>

      <Section title="People say">
        <Testimonials num="3">
          <TestimonialItem author="Junaid Rasheed">
            Varya is an expert in Design System domain. I have had chance to
            work with her in past and I found her very intellectual and
            hardworking individual. She has sounds technical background and deep
            understanding of web applications development. She leans into
            solving a problem not just defining it well. I would gladly
            recommend Varya to anyone who is looking for a Design System expert.
          </TestimonialItem>
          <TestimonialItem author="Alexander Petrovsky">
            Varya is a highly skilled professional designer and developer. Along
            with these qualities, she is a great leader, a team player, and a
            business partner! She is a valuable asset to any team when it comes
            to solving complex business problems! I'm glad to recommend her!
          </TestimonialItem>
          <TestimonialItem author="Rami Etrimo">
            Ability and need to understand the big picture, and always learning
            new things and utilising those learnings in practice, makes Nikita
            an asset to any product development team. Nikita's experience and
            skills nicely combine front-end development with UX design. I had
            the pleasure of working with Nikita in a team responsible for
            developing a fairly complex product where he was able to show the
            power to those two combined with very good results
          </TestimonialItem>
          <TestimonialItem author="Ekaterina Blake">
            Nikita is an extremely skilled web programmer and a wonderful person
            to work with. His ability to efficiently understand, communicate,
            and execute requested adjustments is superior. His experience is
            recognized in the functionality, proficiency, and competency that is
            reflected in each completed task. He also cares about his client and
            takes the time to handle every question and concern right down to
            the last detail. I highly recommend Nikita for any programming need
            and happily serve as a reference!
          </TestimonialItem>
        </Testimonials>
      </Section>
      <Section wide title="Companies that use design systems">
        <div className="bg-design-systems flex w-full h-24">
          <div className="container flex max-w-5-xl">
            {/* <div className="w-1/4">
              <SpotifyLogo height={50} />
            </div> */}
            <div className="w-1/4">
              <AirbnbLogo height={50} />
            </div>
            <div className="w-1/4">
              <AirbnbLogo height={50} />
            </div>
            <div className="w-1/4">
              <AirbnbLogo height={50} />
            </div>
            <div className="w-1/4">
              <AirbnbLogo height={50} />
            </div>
          </div>
        </div>
      </Section>
      <SectionShape className="transform rotate-180" />
      <section className="container mx-auto text-center py-6 mb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Secure your place
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p className="my-4 text-3xl leading-tight">
          Number of participants is limited, book your ticket in advance
        </p>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Register
        </button>
      </section>
    </>
  );
}
