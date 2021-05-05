import clsx from "clsx";
export default function Section({
  children,
  title,
  className,
  wide = false,
  titleDecoration = true,
}) {
  const SectionHeading = (
    <>
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        {title}
      </h2>
      {titleDecoration && (
        <div className="w-full mb-4">
          <div className="h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient w-72"></div>
        </div>
      )}
    </>
  );
  return (
    <section className={clsx("bg-white border-b py-8 flex-grow", className)}>
      <div
        className={clsx(
          `${!wide ? "container max-w-5xl" : ""}`,
          "mx-auto m-8 flex flex-wrap"
        )}
      >
        {title && SectionHeading}
        {children}
      </div>
    </section>
  );
}
