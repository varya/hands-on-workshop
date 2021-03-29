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
    <div className={clsx(className, "w-full flex flex-col flex-shrink")}>
      <div className="relative flex-1 p-6 m-3 mb-0 overflow-hidden bg-white rounded-t rounded-b-none shadow-lg">
        {preheader && (
          <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
            {preheader.toUpperCase()}
          </p>
        )}
        <div className="w-full px-6 text-xl font-bold text-gray-800">
          {title}
        </div>
        <div className="px-6 text-base text-gray-800">{children}</div>
      </div>
      {button && (
        <div className="flex-none p-6 m-3 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow-lg">
          <div className="flex items-center justify-center">
            <Button variant="gradient">{button}</Button>
          </div>
        </div>
      )}
    </div>
  );
}


