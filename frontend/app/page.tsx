"use client";
import Image from "next/image";
import { useState } from "react";

import { FormInterface } from "@/common/interface/dataInterface";

export default function Home() {
  const [title, setTitle] = useState<string>("Mẫu không có tiêu đề");
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };
  return (
    <main className="w-full h-screen">
      <section className="w-full h-full">
        <div className="w-full min-h-[107px]">
          <div className="py-[20px] px-[40px]">
            <div className="flex items-end gap-x-[10px]">
              <Image src={"/form.svg"} width={40} height={40} alt="form-icon" />
              <input
                value={title}
                onChange={handleChangeTitle}
                className="text-[18px] max-w-[190px]"
                type="text"
              />
               <Image src={"/folder.svg"} width={26} height={26} alt="folder-icon" />
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex justify-center gap-x-3">
              <div className="font-medium cursor-pointer text-sm"> Question</div>
              <div className="font-medium cursor-pointer text-sm"> Answer</div>
              <div className="font-medium cursor-pointer text-sm"> Setting</div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-violet-100"></div>
      </section>
    </main>
  );
}
