import Logo from "../public/hands_on_logo.svg";

export default function Hero({ children }) {
  return (
    // <div className="pt-24">
    //   <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    //     {/* <!--Left Col--> */}
    //     <div className="flex flex-col w-full justify-center items-start text-center md:text-left mb-8">
    //       {children}
    //     </div>
    //   </div>
    // </div>

    <div className="py-16">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {children}
      </div>
    </div>
  );
}
