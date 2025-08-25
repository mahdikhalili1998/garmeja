import Image from "next/image";
import React from "react";
import TextDemo from "../module/DemoText";
import SearchBar from "../element/SearchBar";
import rooms from "@/constant/data";
import { FiShare2 } from "react-icons/fi";

function MainPage() {
  return (
    <div>
      <div className="relative h-[28rem] w-full text-white">
        {/* bg with gradiant  */}
        <div className="absolute inset-0 bg-[url('/image/bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 to-black/70" />

        {/* Content */}
        <div className="relative z-10 pt-5 text-center">
          <SearchBar />
          <TextDemo />
        </div>
      </div>
      {/* login suggestion */}
      <div className="mx-2 mt-7 rounded-lg bg-white px-8 py-4">
        <span className="text-sm font-bold">
          برای اطلاع از تخفیف‌ها و پیشنهادات ویژه{" "}
          <span className="text-red-500">ثبت نام </span> کنید
        </span>
      </div>
      {/* palce info */}
      <div className="mx-2 mt-7 flex flex-col items-center justify-center gap-14 rounded-lg bg-white py-4">
        {rooms.map((item, index) => (
          <div className="relative" key={index}>
            {/* main pic  */}
            <div className="">
              <Image
                src={item.mainPic}
                alt={item.title}
                width={400}
                height={400}
                priority
                className="h-44 w-[22rem] rounded-lg border-[1px] border-yellow-400 object-cover"
              />
              <span className="absolute left-2 top-2 rounded-lg bg-white p-3">
                <FiShare2 className="text-xl text-black" />
              </span>
            </div>
            {/* owner pic  */}
            <Image
              src={item.ownerPic}
              alt={item.title}
              width={300}
              height={300}
              priority
              className="-mt-6 mr-auto size-[4rem] rounded-full border-[1px] border-yellow-400"
            />
            {/* description  */}
            <div className="-mt-6 rounded-lg bg-orange-500 p-3">
              <span className="font-bold">{item.title}</span>
              {/* options & title  */}
              <div className="my-2 flex items-center justify-between">
                {/* options  */}
                <div className="flex text-sm">
                  {item.options.map((item, index) => (
                    <span
                      key={index}
                      className="after:mx-2 after:content-['|'] last:after:content-['']"
                    >
                      {item}{" "}
                    </span>
                  ))}
                </div>
                {/* comment */}
                <span>{item.comment} نظر</span>
              </div>
              {/* price  */}
              <span className="text-sm font-bold">
                هر شب از {item.price} تومان{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
