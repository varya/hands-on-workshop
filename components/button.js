import React from "react";
import clsx from "clsx";
import ReactGA from "react-ga";
const GA_TRACKING_ID = "UA-185519437-1";

ReactGA.initialize(GA_TRACKING_ID);
const variants = {
  base:
    "bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
  gradient:
    "gradient-simple text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
  "gradient-small":
    "gradient-simple text-white font-bold rounded-full py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
};

// const Button = React.forwardRef(
//   ({ variant, className, name, ...props }, ref) => {
//     const sendLog = () => {
//       ReactGA.event({
//         category: "REGISTRATION",
//         action: "Click",
//         label: name,
//       });
//     };
//     return (
//       <button
//         {...props}
//         ref={ref}
//         onClick={() => sendLog()}
//         className={clsx(className, "hover:underline", variants[variant])}
//       ></button>
//     );
//   }
// );

const Button = () => <div className="text-lg py-3"> COMING SOON</div>;
export default Button;
