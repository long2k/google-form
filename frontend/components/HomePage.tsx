import React, { useState } from "react";
import TopCard from "./base/TopCard";
import QuestionCard from "@/components/base/QuestionCard"

export interface FormDataInterface {
  question: string;
  answer: string
}

const HomePage = () => {
  const [data, setData ] = useState<FormDataInterface[]>([]);
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
  };
  return (
    <main className="w-full h-full">
      <section className="w-full py-[50px] h-full bg-violet-100 flex justify-center">
        <div className="w-[640px] h-full flex flex-col items-center gap-3 pt-[20px]">
          <TopCard />
          <QuestionCard data={data} setData={setData}/>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
