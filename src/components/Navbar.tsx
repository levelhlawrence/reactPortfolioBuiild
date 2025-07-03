function Navbar() {
  return (
    <nav className="flex justify-between p-4 px-8 md:px-20 lg:px-34 xl:px-40 shadow items-center">
      <h4 className="border-2 border-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
        LL
      </h4>
      <image id={"menu"} width={40} height={20} src="/menu.svg" alt="menu" />

      <ul className="flex md:items-center md:justify-end md:gap-6 absolute md:relative hidden md:flex right-0 flex-col md:flex-row top-[72px] md:top-0 bg-white md:bg-[rgba(0,0,0,0.0)] z-[100] h-[90vh] md:h-0 w-1/2 border-black md:border-none border-l-4 rounded-tl-xl rounded-bl-xl">
        <li className="ml-8 mt-10 md:mt-0 md:ml-0">
          <a href="/">Home</a>
        </li>
        <li>
          <a className="ml-8 md:ml-0" href="projects">
            Projects
          </a>
        </li>
        <li>
          <a className="ml-8 md:ml-0" href="about">
            About
          </a>
        </li>
        <li>
          <a className="ml-8 md:ml-0" href="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
