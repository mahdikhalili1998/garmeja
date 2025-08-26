"use client";
import { useState, useRef, useEffect } from "react";
import { IoSearchOutline, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // close modal with outside click
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  // close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <div className="flex items-center justify-center 370:mx-4 370:justify-between">
        <span onClick={() => setMenuOpen(true)} className="cursor-pointer">
          <FiMenu className="text-2xl" />
        </span>
        <div className="mx-5 flex items-center justify-between rounded-lg border-2 border-white px-2 py-2 370:w-full">
          <input
            type="text"
            value={searchValue}
            placeholder="کجای رامسر میخای بری؟"
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent placeholder:font-bold placeholder:text-white/85 focus:outline-none"
          />
          {searchValue ? (
            <IoClose
              onClick={() => setSearchValue("")}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <IoSearchOutline className="text-2xl" />
          )}
        </div>
        <Image
          src={"https://www.garmeja.com/assets/logo-CLHTr-ji.png"}
          alt="logo"
          width={300}
          height={300}
          priority
          className="size-[3rem]"
        />
      </div>
      <div
        className={`fixed inset-0 z-40 flex transition-opacity duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* blur bg  */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* modal  */}
        <div
          ref={menuRef}
          className={`absolute right-0 top-0 z-50 h-full w-64 transform bg-white shadow-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-bold">منو</h2>
            <span className="rounded-full bg-black p-3">
              <IoPerson className="text-4xl text-white" />
            </span>
            <IoClose
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-2xl text-black"
            />
          </div>

          {/* لیست منو */}
          <ul className="space-y-4 p-4 text-black">
            <li className="cursor-pointer hover:text-blue-600">خانه</li>
            <li className="cursor-pointer hover:text-blue-600">مکان‌ها</li>
            <li className="cursor-pointer hover:text-blue-600">رزرو</li>
            <li className="cursor-pointer hover:text-blue-600">تماس با ما</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
