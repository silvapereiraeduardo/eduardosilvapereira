export function TimelineSection({
  title,
  values,
}: {
  title: string;
  values: {
    side: "left" | "right";
    month?: string;
    year?: string;
    title?: string;
    subTitle?: string;
    text?: string;
  }[];
}) {
  function renderContent({
    side,
    month,
    year,
    title,
    subTitle,
    text,
  }: {
    side: "left" | "right";
    month?: string;
    year?: string;
    title?: string;
    subTitle?: string;
    text?: string;
  }) {
    return (
      <>
        <div
          className={`hidden mb-8 md:flex justify-between items-center w-full ${side}-timeline ${
            side === "left" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex flex-col items-center justify-center order-1 shadow-xl w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2">
            <span className="font-semibold leading-4 text-lg text-gray-900 dark:text-white">
              {month}
            </span>
            <span className="font-semibold leading-4 text-sm text-gray-900 dark:text-white">
              {year}
            </span>
          </div>

          <div className="order-1 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">
              {title}
            </h3>
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white text-md">
              {subTitle}
            </h4>
            <p className="text-sm font-light text-gray-900 dark:text-white">
              {text}
            </p>
          </div>
        </div>

        <div
          className={`mb-8 flex md:hidden justify-between items-center w-full`}
        >
          <div className="z-20 flex flex-col items-center justify-center shadow-xl w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2">
            <span className="font-semibold leading-4 text-sm text-gray-900 dark:text-white">
              {month}
            </span>
            <span className="font-semibold leading-4 text-xs text-gray-900 dark:text-white">
              {year}
            </span>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 flex-1 ml-4">
            <h3 className="font-bold text-gray-900 dark:text-white text-xl">
              {title}
            </h3>
            <h4 className="mb-3 font-semibold text-gray-900 dark:text-white text-md">
              {subTitle}
            </h4>
            <p className="text-sm font-light text-gray-900 dark:text-white">
              {text}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="container mx-auto w-full h-full px-4 py-12">
      <h2 className="mb-6 text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-none dark:text-white">
        {title}
      </h2>

      <div className="relative wrap overflow-hidden h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-300 dark:border-gray-700 h-full border left-4 md:left-1/2"></div>

        {values.map(renderContent)}
      </div>
    </section>
  );
}
