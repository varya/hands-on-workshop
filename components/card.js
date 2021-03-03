import clsx from "clsx";
import Button from "@components/button";
export default function Card({
  children,
  title,
  preheader,
  button,
  className,
}) {
  return (
    <div
      className={clsx(className, "w-full flex flex-col flex-grow flex-shrink")}
    >
      <div className="flex-1 rounded-t rounded-b-none overflow-hidden m-3 mb-0 p-6 bg-white shadow-lg relative">
        {preheader && (
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {preheader.toUpperCase()}
          </p>
        )}
        <div className="w-full font-bold text-xl text-gray-800 px-6">
          {title}
        </div>
        <div className="text-gray-800 text-base px-6">{children}</div>
      </div>
      {button && (
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg m-3 p-6">
          <div className="flex items-center justify-center">
            <Button variant="gradient">{button}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
