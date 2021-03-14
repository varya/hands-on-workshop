import React from "react";

import BlockImage from "@components/block-image";
import Hero from "@components/hero";
import SectionShape from "@components/section-shape";
import Avatar from "@components/avatar";
import Section from "@components/section";
import Card from "@components/card";
import Button from "@components/button";
import Timeline, { TimelineItem } from "@components/timeline";
import Testimonial from "@components/testimonials";
import LocalTime from "@components/local-time";

import DesignIcon from "../public/sketch.svg";
import DevIcon from "../public/web-development.svg";
import ProcessIcon from "../public/planning.svg";
import TwitterIcon from "../public/twitter.svg";
import LinkedinIcon from "../public/linkedin.svg";
import Airbnb from "../public/logo/airbnb.svg";
import Atlassian from "../public/logo/atlassian.svg";
import IBM from "../public/logo/ibm.svg";
import Microsoft from "../public/logo/microsoft.svg";
import Salesforce from "../public/logo/salesforce.svg";
import Shopify from "../public/logo/shopify.svg";
import Spotify from "../public/logo/spotify.svg";
import Yandex from "../public/logo/yandex.svg";

export default function IndexPage() {
  return (
    <>
      <Hero>
        {/* <!--Left Col--> */}
        <div className="flex flex-col flex-grow w-full md:w-8/12 justify-center items-center text-center md:text-left mt-12">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Hands-on with Design Systems
          </h1>
          <p className="leading-normal text-2xl mb-8">
            2-day workshop on building a design system with Figma and React.
            Join as a designer or as a developer to work as a team.
          </p>
        </div>
        {/* <!--Right Col--> */}
        <div className="flex flex-col flex-grow w-full md:w-4/12 justify-center items-center text-center md:text-left">
          <p className="uppercase tracking-loose w-full text-center font-bold text-xl">
            8 & 9 April
          </p>
          <p className="uppercase tracking-loose w-full text-center font-bold text-xl">
            <LocalTime
              start={11}
              end={15}
              format="%start%-%end% %timezone%"
              />
            {/* Details coming soon, stay tuned! */}
          </p>
          <Button
            variant="base"
            className="mb-0 mt-12"
            name="hero register"
            onClick={() =>
              (location.href =
                "https://www.eventbrite.fi/e/hands-on-with-design-systems-tickets-143823667461")
            }
          >
            Register for €310 (incl. VAT)
          </Button>
        </div>
      </Hero>
      <SectionShape className="-mt-12 lg:-mt-24" />
      <Section>
        <div className=" text-gray-600 text-justify tracking-wider my-8  px-4">
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
        <h3 className="w-1/5 text-right font-bold text-gray-900 text-xl py-8">
          Day 1
        </h3>
        <Timeline>
          <TimelineItem time={(<LocalTime
              start={11}
              format="%start%:00"
              />)} heading="Introduction">
            <ul className="list-disc list-inside">
              <li key="1">What are design systems</li>
              <li key="2">Technologies to support design systems</li>
            </ul>
          </TimelineItem>
          <TimelineItem time={(<LocalTime
              start={12}
              format="%start%:00"
              />)} heading="Design and Process">
            <ul className="list-disc list-inside">
              <li key="3">UI inventory and scoping</li>
              <li key="4">Structure of Figma library</li>
              <li key="5">Designing and coding first components together</li>
              <li key="6">Design&code automatic sync</li>
            </ul>
          </TimelineItem>
          <TimelineItem time={(<LocalTime
              start={15}
              format="%start%:00"
              />)} heading="End of first day" align="end" />
          </Timeline>
        <h3 className="w-1/5 text-right font-bold text-gray-900 text-xl py-8">
          Day 2
        </h3>
        <Timeline>
          <TimelineItem time={(<LocalTime
              start={11}
              format="%start%:00"
              />)} heading="Design system in action">
            <ul className="list-disc list-inside">
              <li key="7">Patterns and components in Figma</li>
              <li key="8">Coding the library of components</li>
              <li key="9">Building the product using DS</li>
            </ul>
          </TimelineItem>
          <TimelineItem time={(<LocalTime
              start={13}
              format="%start%:00"
              />)} heading="Design system in action">
            <ul className="list-disc list-inside">
              <li key="10">Brand changes to the library</li>
              <li key="11">Automatic product update</li>
            </ul>
          </TimelineItem>
          <TimelineItem time={(<LocalTime
              start={14}
              format="%start%:00"
              />)} heading="Running through the processes">
            <ul className="list-disc list-inside">
              <li>Recap</li>
            </ul>
          </TimelineItem>
          <TimelineItem time={(<LocalTime
              start={15}
              format="%start%:00"
              />)} heading="End of the workshop" align="end" />
        </Timeline>
      </Section>
      {/* CARDS SECTION */}
      <Section title="Why attend" className="bg-gray-100">
        <Card className="md:w-1/3">
          <DesignIcon className="w-full h-full max-h-64 px-16 md:px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li key="9" className="pb-2">
              Practice UI inventory{" "}
            </li>
            <li key="10" className="pb-2">
              Run brand-changes in nearly zero time
            </li>
            <li key="11" className="pb-2">
              Learn how to organize the components in Figma
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <DevIcon className="w-full h-full max-h-64 px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li key="12" className="pb-2">
              Component-driven development
            </li>
            <li key="13" className="pb-2">
              Learn tips and tricks of making a pattern library
            </li>
            <li key="14" className="pb-2">
              Practice React, Storybook, and styled-components
            </li>
          </ul>
        </Card>
        <Card className="md:w-1/3">
          <ProcessIcon className="w-full h-full max-h-64 px-8 pb-8 pt-4" />
          <ul className="list-disc list-inside">
            <li key="15" className="pb-2">
              Automate design and development processes
            </li>
            <li key="16" className="pb-2">
              Learn to work with a design system in a multifunctional team
            </li>
            <li key="17" className="pb-2">
              Practice DS development cycle: create, maintain and keep coherent
            </li>
          </ul>
        </Card>
      </Section>

      <Section title="Who we are">
        <BlockImage image={<Avatar src="/varya.jpg" alt="Varya Stepanova" />}>
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Varya Stepanova
          </h3>
          <p className="uppercase w-full font-bold text-lg leading-loose text-gray-900">
            Design systems architect and engineering manager
          </p>
          <p className="text-gray-600 text-xl mb-8">
            As an independent consultant, Varya helps companies to launch and
            boost their design systems. Her major focus is bridging the gap for
            designers, developers, and business specialists. That all is
            seasoned with extensive experience in component-driven UI
            development and a design degree.
          </p>
          <div className="flex">
            <a
              key="l-v"
              className="mr-4 cursor-pointer flex"
              href="https://www.linkedin.com/in/varyastepanova/"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/varya_en">
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
          image={<Avatar src="/sherif.jpg" alt="Sherif Saleh" />}
        >
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Sherif Saleh
          </h3>
          <p className="uppercase w-full font-bold text-lg leading-loose text-gray-900">
            Senior product designer
          </p>

          <p className="text-gray-600 text-xl mb-8">
            Sherif is a senior product designer. He crafts deligthful experiences
            through data analytics, user research, prototypes, and validation.
            Sherif has extensive experience with design systems and years of
            working for financial services, banks, and automotive.


          </p>
          <div className="flex">
            <a
              key="l-n"
              className="mr-4 cursor-pointer flex"
              href="https://www.linkedin.com/in/salehsherif/"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/sans_sherif">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
        <BlockImage
          image={<Avatar src="/nikita.jpg" alt="Nikita Sharbakov" />}
        >
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            Nikita Sherbakov
          </h3>
          <p className="uppercase w-full font-bold text-lg leading-loose text-gray-900">
            Software architect & senior frontend engineer
          </p>

          <p className="text-gray-600 text-xl mb-8">
            Nikita has 10+ years of experience building web projects of
            different kinds, starting from small websites to Design Systems and
            complex web services. He can help with creating and maintaining
            frontend architecture, tuning the automations and sharing the
            processes.
          </p>
          <div className="flex">
            <a
              key="l-n"
              className="mr-4 cursor-pointer flex"
              href="https://linkedin.com/in/nikita-sherbakov"
            >
              <LinkedinIcon
                height="30"
                width="30"
                className="hover:opacity-50"
              />
            </a>
            <a key="t-v" href="https://twitter.com/sherbakovdev">
              <TwitterIcon
                className="hover:opacity-50"
                height="30"
                width="30"
              />
            </a>
          </div>
        </BlockImage>
      </Section>

      <Section title="People say" className="bg-gray-100">
        <Testimonial author="Junaid Rasheed" dir="right">
          Varya is an expert in Design System domain. I have had chance to work
          with her in past and I found her very intellectual and hardworking
          individual. She has sounds technical background and deep understanding
          of web applications development. She leans into solving a problem not
          just defining it well. I would gladly recommend Varya to anyone who is
          looking for a Design System expert.
        </Testimonial>
        <Testimonial author="Ekaterina Blake">
          Nikita is an extremely skilled web programmer and a wonderful person
          to work with. His ability to efficiently understand, communicate, and
          execute requested adjustments is superior. His experience is
          recognized in the functionality, proficiency, and competency that is
          reflected in each completed task. He also cares about his client and
          takes the time to handle every question and concern right down to the
          last detail. I highly recommend Nikita for any programming need and
          happily serve as a reference!
        </Testimonial>
        <Testimonial author="Anthony Tahar" dir="right">
          Sherif is a proactive and tireless contributor who would make a great
          addition to any team. He completed his assignments on time and never
          failed to add a creative touch when appropriate.
        </Testimonial>
        <Testimonial author="Alexander Petrovsky">
          Varya is a highly skilled professional designer and developer. Along
          with these qualities, she is a great leader, a team player, and a
          business partner! She is a valuable asset to any team when it comes to
          solving complex business problems! I'm glad to recommend her!
        </Testimonial>
        <Testimonial author="Rami Etrimo" dir="right">
          Ability and need to understand the big picture, and always learning
          new things and utilising those learnings in practice, makes Nikita an
          asset to any product development team. Nikita's experience and skills
          nicely combine front-end development with UX design. I had the
          pleasure of working with Nikita in a team responsible for developing a
          fairly complex product where he was able to show the power to those
          two combined with very good results.
        </Testimonial>
        <Testimonial author="David Teissier">
          Sherif was a true professional in his business. Great skills in web
          design and UX. CSS has no secrets for him also. We worked together on
          web projects to large sizes.
        </Testimonial>
      </Section>
      {/* LOGO SECTION */}
      <Section
        wide
        title="Companies that use design systems"
        titleDecoration={false}
        className="border-transparent"
      >
        <div className="relative bg-design-systems bg-center flex w-full py-8">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-200 opacity-75" />
          <div className="container flex flex-wrap max-w-5xl mx-auto z-10 justify-between">
            {[
              Microsoft,
              Spotify,
              Atlassian,
              Yandex,
              Airbnb,
              Salesforce,
              Shopify,
              IBM,
            ].map((Logo, i) => {
              return (
                <div className="md:w-1/4 w-1/2 h-24 flex" key={i + "_logo"}>
                  {
                    <Logo
                      className="max-h-24 w-full px-8"
                      preserveAspectRatio="xMidYMid"
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section title="Custom workshop version" className="border-b-0">
        <div className=" text-gray-600 text-justify tracking-wider my-8  px-4">
          <p className=" text-xl leading-8 my-4">
            Need a custom version? We can tailor this workshop for your company.
            When focused on your product and taking into account your team
            shape, the workshop outcome is not only a training session but also
            your design system's kick-off. We’ll walk through the design system
            process, how to get started and how to fit it into your existing
            design processes. There will be an opportunity for the team to
            discuss questions they might have about implementing a design
            system.
          </p>
          <p className="text-xl leading-8 my-4">
            Contact Varya by&nbsp;
            <a className="text-v-dark-blue" href="mailto:mail@varya.me">
              mail@varya.me
            </a>{" "}
            to discuss your custom workshop details.
          </p>
        </div>
      </Section>
      <SectionShape className="transform rotate-180" />
      <section className="container mx-auto text-center py-6 mb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Tickets
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <p className="my-4 text-3xl leading-tight">
          10 early-bird tickets (before the 22nd of March) for €310 (incl. VAT 24%)
        </p>
        <p className="my-4 text-3xl leading-tight">
          10 regular price tickets for €434 (incl. VAT 24%)
        </p>
        <Button
          name="bottom-register"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          onClick={() =>
            (location.href =
              "https://www.eventbrite.fi/e/hands-on-with-design-systems-tickets-143823667461")
          }
        >
          Register to the workshop
        </Button>
      </section>
    </>
  );
}
