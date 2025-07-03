import AtlImage from "../assets/images/Atl_image.jpg";

function Contacts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-20 lg:px-34 xl:px-40 px-10 h-[86vh]">
      <aside className="my-10">
        <div
          style={{ backgroundImage: `url(${AtlImage})` }}
          className="bg-[url('../assets/images/Atl_image.jpg')] bg-cover bg-center h-full w-full rounded-tl-3xl rounded-br-3xl relative"
        >
          <div className="bg-[rgba(0,0,0,0.4)] absolute h-full w-full rounded-br-3xl rounded-tl-3xl z-10"></div>
          <h2 className="text-4xl px-4 pt-4 font-bold text-white z-20 relative">
            THANKS <span className="text-sky-200">FOR REACHING OUT!</span>
          </h2>
          <h4 className="px-4 pt-2 font-semibold text-white z-20 relative">
            These are the many ways you can get in touch
          </h4>
          <ul className="px-4 mt-6 text-white z-20 relative">
            <li>
              <a
                className="underline hover:text-sky-200"
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:levelhlawrence@gmail.com"
              >
                My Email
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-sky-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/levelhlawrence/"
              >
                My LinkedIn
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-sky-200"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/levelhlawrence"
              >
                My GitHub
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <form
        action="https://formsubmit.co/levelhlawrence@gmail.com"
        method="POST"
        className="bg-gray-100 rounded-tl-3xl rounded-br-3xl my-10"
      >
        <h1 className="text-3xl p-4 mb-6">Contact</h1>
        <div className="flex flex-col px-4 mb-4">
          <label htmlFor="client-name">Name</label>
          <input
            required
            className="rounded px-2 bg-white"
            name="client-name"
            type="text"
            id="client-name"
          />
        </div>
        <div className="flex flex-col px-4 mb-4">
          <label htmlFor="client-email">Email</label>
          <input
            required
            className="rounded px-2 bg-white"
            name="client-email"
            type="email"
            id="client-email"
          />
        </div>
        <div className="flex flex-col px-4 mb-4">
          <label htmlFor="client-message">Message</label>
          <textarea
            required
            className="px-2 bg-white rounded"
            name="client-message"
            id="client-message"
            rows={6}
          ></textarea>
        </div>
        <button
          className="bg-black text-white ml-4 py-2 px-4 rounded hover:cursor-pointer"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contacts;
