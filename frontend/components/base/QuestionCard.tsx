import { FormData } from "@/common/data/const";
import { FormDataInterface } from "@/components/HomePage";
import { useEffect } from "react";

const QuestionCard = ({
  data,
  setData,
}: {
  data: FormDataInterface[];
  setData: React.Dispatch<React.SetStateAction<FormDataInterface[]>>;
}) => {
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

  useEffect(() => {
    load()
  }, []);
  useEffect(() => {
    console.log("data:", data);
  }, [data]);

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
                    checked={data[idx]?.answer && data[idx]?.answer === content ? true : false}
                  />
                  <p>{content}</p>
                </div>
              ))}
            </form>
          </div>
        );
      })}
      <div className="w-full flex justify-between items-center">
        <button className="bg-violet-800 text-[14px] font-semibold rounded-[5px] px-[24px] py-[10px] text-white ">
          Send
        </button>
        <div
          onClick={handleDelete}
          className="text-sm text-[#673ab7] font-semibold"
        >
          Xóa hết câu trả lời
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
