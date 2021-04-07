import Section from "../components/section";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

const MDXComponents = {
  a: (props) => {
    return props.href.startsWith("http") ? (
      <a target="_blank" rel="noopener" {...props} />
    ) : (
      <Link {...props} />
    );
  },
};
function Layout(props) {
  return (
    <>
      <div className="flex bg-white min-w-100">
        <div className="container max-w-2xl py-2 pl-8 mx-auto text-xl text-left underline text-v-red">
          <Link className="text-v-red" href="/handout">
            Go Back
          </Link>
        </div>
      </div>
      <Section title={props.meta.title}>
        <div className="px-4 mx-auto my-8 tracking-wider prose text-justify text-gray-600">
          <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
        </div>
      </Section>
    </>
  );
}

export default Layout;
