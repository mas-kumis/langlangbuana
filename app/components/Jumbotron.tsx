"use client";

export default function Jumbotron() {
  return (
    <section className="relative h-[500px]">
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <div className="mt-8">
            <a
              href="mailto:hello@langlangbuana.com?subject=Subscribe"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
