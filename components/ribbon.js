import clsx from "clsx";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function Ribbon({ role, className }) {
  return (
    <div
      className={clsx(
        className,
        "absolute p-1 left-auto text-center transform top-4  w-32 shadow-md text-white ",
        `bg-${role === "designer" ? "v-red" : "v-dark-blue"}`,
        role === "designer" ? "-left-8 -rotate-45" : "-right-8 rotate-45"
      )}
    >
      {capitalize(role)}
    </div>
  );
}
