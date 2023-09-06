import { AiFillFolder } from "react-icons/ai";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDoubleLeft } from "react-icons/ai";

interface Link {
  text: string;
  url: string;
  icon: React.ReactNode;
}

interface FolderLink {
  id: string;
  text: string;
}
export const SideBar = () => {
  const links: Link[] = [
    {
      text: "Todos",
      url: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
  ];

  const folderLinks: FolderLink[] = [
    {
      id: "1",
      text: "Name carpeta",
    },
    {
      id: "2",
      text: "Name carpeta 2",
    },
  ];

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0 h-screen relative">
      <div className="absolute inset-y-0 left-0 ">
        <button
          className="flex items-center justify-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900"
          onClick={handleOpen}
        >
          {/* Icono de React icons de flecha */}
          <AiOutlineDoubleLeft className="w-4 h-4" />
        </button>
      </div>
      <div className={`flex flex-col ${open ? "w-64" : "w-20"} flex-shrink-0`}>
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r bg-neutral-800">
          <div className="flex flex-col items-center flex-shrink-0 px-4">
            <div className="flex flex-row items-center justify-between w-full">
              <a
                className="text-left focus:outline-none"
                href="/groups/sidebar/"
              >
                <h2 className="block p-2 text-xl font-medium tracking-tighter transition duration-500 ease-in-out transform cursor-pointer text-neutral-200 hover:text-neutral-200">
                  Qr Generator
                </h2>
              </a>
            </div>
            <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-neutral-800">
              {/* UL */}
              <ul>
                {links.map((link) => (
                  <li key={link.text}>
                    <a
                      className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900"
                      href={link.url}
                    >
                      {link.icon}
                      <span className={`ml-4 ${open ? "block" : "hidden"}`}>
                        {link.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p
                className={`px-4 pt-4 font-medium uppercase text-neutral-200 ${
                  open ? "block" : "hidden"
                }`}
              >
                MIS CARPETAS
              </p>
              <ul>
                {folderLinks.map((folderLink) => (
                  <li key={folderLink.id}>
                    <a
                      className={`inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform border rounded-lg text-neutral-200 border-neutral-800 hover:border-neutral-800 focus:shadow-outline hover:bg-neutral-900 `}
                      href="#"
                    >
                      <AiFillFolder className="w-4 h-4" />

                      <span className={`ml-4 ${open ? "block" : "hidden"}`}>
                        {" "}
                        {folderLink.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* Nueva carpeta */}
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 px-4 bg-neutral-900">
            <a href="#" className="flex-shrink-0 block w-full group">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block rounded-full h-9 w-9"
                    src="/assets/images/avatar.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-neutral-200">
                    Wicked Labs
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
