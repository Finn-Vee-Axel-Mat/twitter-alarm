import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createPopper } from "@popperjs/core";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  /* Log out */
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("alarms");
    navigate("/");
  };

  return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-1 flex items-center text-xs uppercase font-bold"
        href="#"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="lg:text-blue-500 text-blue-500 fas fa-user-circle text-4xl lg: p-0 " />
        <span className="lg:hidden inline-block ml-2">Account Manager</span>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded-xl shadow-lg mt-1 min-w-48"
        }
      >
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          <p
            style={{
              textAlign: "center",
              backgroundColor: "#a1e8e1",
              borderRadius: "5px",
              padding: 2,
            }}
          >
            <b>{localStorage.getItem("email")}</b>
          </p>
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </a>
        <a
          href="#"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => navigate("/settings")}
        >
        Settings
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <button
          onClick={logout}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
