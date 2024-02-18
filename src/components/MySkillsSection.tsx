export function MySkillsSection() {
  return (
    <section className="container mx-auto w-full h-full px-4 py-12">
      <h2 className="mb-6 text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-none dark:text-white">
        Competências
      </h2>

      <div className="flex flex-wrap gap-4 justify-center items-center mt-8 text-gray-900 dark:text-white">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">TypeScript</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">React</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">React Native</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">AngularJS</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">ExpoJS</span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl px-6 py-4">
          <span className="font-semibold">NodeJS</span>
        </div>
      </div>
    </section>
  );
}
