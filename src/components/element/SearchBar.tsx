"use client";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="370:justify-between 370:mx-4 flex items-center justify-center">
      <span>
        <FiMenu className="text-2xl" />
      </span>
      <div className="370:w-full mx-5 flex items-center justify-between rounded-lg border-2 border-white px-2 py-2">
        <input
          type="text"
          value={searchValue}
          placeholder="کجای رامسر میخای بری؟"
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-transparent placeholder:font-bold placeholder:text-white/85 focus:outline-none"
        />
        {searchValue ? (
          <IoClose onClick={() => setSearchValue("")} className="text-2xl" />
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
  );
}

export default SearchBar;
