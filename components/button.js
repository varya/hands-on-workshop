import React from "react";
import clsx from "clsx";

const variants = {
  base:
    "bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
  gradient:
    "gradient-simple text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
  "gradient-small":
    "gradient-simple text-white font-bold rounded-full py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out",
};

const Button = React.forwardRef(({ variant, className, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(
        className,
        "mx-auto lg:mx-0 hover:underline",
        variants[variant]
      )}
    ></button>
  );
});
export default Button;
