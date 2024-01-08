"use client";
import React, { useContext } from "react";
import { userContext } from "../UserProvider/UserProvider";
import Link from "next/link";

const Navbar = () => {
  let { user, logout } = useContext(userContext);
  console.log(user);

  let logoutHandel = () => {
    logout()
      .then(() => {
        window.location.reload(false);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="navbar bg-base-100 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">MEC HEALFY</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <p>{user.email}</p>
            <button className="btn mx-1 btn-sm" onClick={logoutHandel}>
              Sing Out
            </button>
          </>
        ) : (
          <>
            <button className="btn mx-1 btn-sm">
              <Link className="m-1" href={"/login"}>
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
