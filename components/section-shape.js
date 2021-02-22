import ShapeSvg from "../public/shape-waves.svg";
import clsx from "clsx";
export default function SectionShape({ className, ...props }) {
  return (
    <div className={clsx(className, "relative ")}>
      <ShapeSvg {...props} />
    </div>
  );
}
