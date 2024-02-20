import React, { useState } from "react";
import Image from "next/image";
import TopCard from "./base/TopCard";
import { FormData } from "@/common/data/const";
import QuestionCard from "@/components/base/QuestionCard"

const HomePage = () => {
  const [title, setTitle] = useState<string>("Mẫu không có tiêu đề");
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };
  return (
    <main className="w-full h-screen">
      <section className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center gap-3 bg-violet-100 pt-[20px]">
          <TopCard />
          <QuestionCard />
          <div>
            <button>Send</button>
            <div>Xóa hết câu trả lời</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
