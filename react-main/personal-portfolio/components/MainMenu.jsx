import { useState } from "react";
import { Menu } from "./icons/Menu";

export function MainMenu({ items }) {
  return (
    <>
      <div className="hidden md:flex">
        {items.map((item) => (
          <a key={item.id} className="px-4 py-2" href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      <MobileMenu />
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);
  // const [name, setName] = useState("Bold");

  // let open = false;

  function openMenu() {
    //   open = true;
    setVisible(true);
  }

  function closeMenu() {
    //   open = false;
    setVisible(false);
  }

  return (
    <>
      <button className="sm:flex md:hidden" onClick={openMenu}>
        <Menu />
      </button>
      {visible && <div className="fixed inset-0 bg-slate-400/70"></div>}
      <div
        className={`fixed top-0 bottom-0 w-3/4 transition-all bg-white ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="p-8 text-2xl">Mobile Menu</div>
        <button onClick={closeMenu} className="dark:text-black">
          close
        </button>
      </div>
    </>
  );
}
