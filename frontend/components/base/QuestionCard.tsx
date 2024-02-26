import { FormData } from "@/common/data/const";
import { FormDataInterface } from "@/components/HomePage";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { saveUser } from "@/common/utils";
import Image from "next/image";

const QuestionCard = ({
  data,
  setData,
}: {
  data: FormDataInterface[];
  setData: React.Dispatch<React.SetStateAction<FormDataInterface[]>>;
}) => {
  const { data: session } = useSession();
  const user = session?.user;
  const [loading, setLoading] = useState<boolean>(false);

  const load = () => {
    if (!data.length) {
      let dataClone = [...data];
      FormData.map((item) =>
        dataClone.push({ question: item.question, answer: "" })
      );
      setData(dataClone);
    }
  };

  const handleSelect = (index: number, content: string) => {
    const dataClone = [...data];
    dataClone[index].answer = content;
    setData(dataClone);
  };

  const handleDelete = () => {
    const dataClone = data.map((item) => ({
      question: item.question,
      answer: "",
    }));
    setData(dataClone);
  };
  const handleSubmit = async () => {
    try {
      const values = data.map((item) => item.answer);
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        if (user && Object.keys(user).length > 0) {
          await saveUser(user);
        }
        window.location.reload();
      }
    } catch (error) {
      // do nothing
    } finally  {
      setLoading(false)
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      {FormData.map((item, idx) => {
        return (
          <div
            className="bg-white p-[24px] w-full border rounded-[10px]"
            key={`question-${idx}`}
          >
            <div>{item.question}</div>
            <form className="pt-[16px]">
              {item.answer.map((content, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    onClick={() => handleSelect(idx, content)}
                    type="radio"
                    id={content}
                    name={`question-${idx}`}
                    checked={
                      data[idx]?.answer && data[idx]?.answer === content
                        ? true
                        : false
                    }
                  />
                  <p>{content}</p>
                </div>
              ))}
            </form>
          </div>
        );
      })}
      <div className="w-full flex justify-between items-center">
        <button
          onClick={handleSubmit}
          className="bg-violet-800 flex text-[14px] font-semibold rounded-[5px] px-[24px] py-[10px] text-white "
        >
          Send
        </button>
        <div
          onClick={handleDelete}
          className="text-sm text-[#673ab7] font-semibold pointer-cursor"
        >
          Xóa hết câu trả lời
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
