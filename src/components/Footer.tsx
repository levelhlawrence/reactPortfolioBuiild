function Footer() {
  return (
    <footer className="h-[10vh] w-screen bg-[#9695A6] flex justify-center text-center items-center text-sm shadow-inner">
      <aside className="my-6 flex flex-col items-center gap-1">
        <p className="font-bold">&copy; 2025 Level Lawrence</p>
        <p>Full-Stack Developer • Atlanta, GA</p>
        <ul className="flex gap-4 text-xs">
          <li>
            <a href="#">[GitHub]</a>
          </li>
          <li>
            <a href="#">[LinkedIn]</a>
          </li>
          <li>
            <a href="#">[Resume]</a>
          </li>
        </ul>
      </aside>
    </footer>
  );
}
export default Footer;
