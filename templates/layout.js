import Section from "../components/section";
import { MDXProvider } from "@mdx-js/react";

const MDXComponents = {};
function Layout(props) {
  return (
    <Section title={props.meta.title}>
      <div className="px-4 mx-auto my-8 tracking-wider prose text-justify text-gray-600">
        <MDXProvider components={MDXComponents}>{props.children}</MDXProvider>
      </div>
    </Section>
  );
}

export default Layout;
