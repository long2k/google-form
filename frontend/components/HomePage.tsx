import React, { useEffect, useState } from "react";
import TopCard from "./base/TopCard";
import QuestionCard from "@/components/base/QuestionCard";
import { useSession } from "next-auth/react";
import TickDoneCard from "./base/TickDoneCard";

export interface FormDataInterface {
  question: string;
  answer: string;
}

const HomePage = () => {
  const [data, setData] = useState<FormDataInterface[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const { data: session } = useSession();
  const checkDone = async () => {
    const email = session?.user?.email;
    if (email) {
      const res = await fetch(`http://localhost:8001/api/user/${email}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const values = await res.json();
      if (values.isExisted) {
        setIsDone(true);
      }
    }
  };
  useEffect(() => {
    checkDone().catch(console.error);
  }, []);
  // const { data: session } = useSession()
  return (
    <main className="w-full h-full">
      <section className="w-full py-[50px] min-h-screen h-full bg-violet-100 flex justify-center">
        {isDone ? (
          <div className="w-[640px] h-full flex flex-col items-center gap-3 pt-[20px]">
            <TickDoneCard />
          </div>
        ) : (
          <div className="w-[640px] h-full flex flex-col items-center gap-3 pt-[20px]">
            <TopCard />
            <QuestionCard data={data} setData={setData} />
          </div>
        )}
      </section>
    </main>
  );
};

export default HomePage;
