// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import routes from "../utils/routes";
import { LuAlignJustify } from "react-icons/lu";

const Sidebar = () => {
  console.log("routes", routes); // Log routes here to see if they are fetched correctly

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer"
          className="btn btn-accent h-full rounded-none"
        >
          <LuAlignJustify className="justify-center flex" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>

        <ul className="menu p-4 w-80 min-h-full  text-base-content bg-gradient-to-tr bg-opacity-70  from-black to-purple-900">
          <div className="divider divider-accent"></div>

          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>
                <p className="text-white hover:text-gray-300">{route.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
