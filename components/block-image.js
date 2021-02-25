export default function BlockImage({ reverse = false, image, children }) {
  const Image = (
    <div className={`overflow-hidden w-full sm:w-1/3 p-6 mt-6`}>{image}</div>
  );
  return (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row min-w-full">
      {reverse && Image}
      <div className="w-full sm:w-2/3 p-6 mt-6">
        <div className={`align-middle ${reverse ? "ml-6" : "mr-6"}`}>
          {children}
        </div>
      </div>
      {!reverse && Image}
    </div>
  );
}
