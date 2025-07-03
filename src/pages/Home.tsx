import landingProfile from "../assets/images/portfolioImg-Photoroom.png";
import wallpaper from "../assets/images/wallpaper.jpg";

function Home() {
  return (
    <section id="home-page">
      <div className="overflow-hidden relative w-full">
        <article
          id="main-top"
          className="relative flex justify-between h-[62vh]"
        >
          <div
            className="absolute inset-0 bg-center opacity-20 z-0 shadow-lg shadow-inset"
            style={{
              backgroundSize: "16rem",
              backgroundImage: `url(${wallpaper})`,
            }}
          ></div>

          <aside
            id="main-content-left"
            className="md:ml-20 lg:ml-34 xl:ml-40 text-center md:relative md:w-full md:mt-32 md:text-left md:ml-10 absolute left-0 bottom-0 right-0 py-6"
          >
            <div className="bg-[rgba(26,31,58,0.4)] w-screen h-full blur-3xl absolute z-30 md:bg-transparent"></div>
            <h2 className="text-4xl lg:text-5xl md:text-black text-white font-thin relative z-40">
              Hey I'm
            </h2>
            <h1 className="text-6xl lg:text-7xl text-white md:text-black relative z-40">
              Level Lawrence
            </h1>
            <h3 className="text-3xl lg:text-4xl text-gray-200 md:text-black font-bold relative z-40">
              Full Stack Developer
            </h3>
            <p className="relative z-40 text-white px-16 mt-4 md:text-black md:px-0 md:w-3/4">
              I turn creative ideas into seamless code, building beautiful,
              functional solutions that make an impact. Let's create something
              extraordinary together.
            </p>
            <div className="text-white mt-8 relative z-50">
              <button className="bg-black px-4 py-2 rounded mr-4">
                My Work
              </button>
              <button className="bg-sky-600 px-6 py-2 rounded">Hire Me</button>
            </div>
          </aside>

          <aside id="main-content-right" className="relative w-full z-20">
            <div>
              <div
                id="bg-circle"
                className="bg-[rgba(240,231,232,0.8)] absolute z-10 h-[20rem] w-[20rem] rounded-full right-60 bottom-[-6rem] blur-3xl"
              ></div>
              <div className="z-40 absolute right-20 top-16 w-[32rem] lg:right-40">
                <img src={landingProfile} alt="landing profile" />
              </div>
              <div
                id="table"
                className="bg-[#353465] h-60 w-[30rem] absolute top-[25rem] right-[-16rem] lg:right-[-11rem] rounded-2xl"
              ></div>
            </div>
          </aside>
        </article>

        <article id="main-bottom" className="h-[24vh] relative z-[80]">
          <aside className="bg-[#1A1F3A] h-full border-t-4 border-[#9695A6]">
            <h4 className="text-white text-center mt-4">Skills</h4>
            <ul className="flex flex-wrap gap-4 items-center justify-center mt-6 px-4 text-2xl text-[#9695A6]">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>TailwindCSS</li>
              <li>NextJS</li>
              <li>Vercel</li>
              <li>AWS</li>
            </ul>
          </aside>
        </article>
      </div>
    </section>
  );
}

export default Home;
