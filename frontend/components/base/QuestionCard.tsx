import { FormData } from "@/common/data/const";

const QuestionCard = () => {
    return (
        <>
            {
                FormData.map((item, idx) => {
                    return (
                        <div className="bg-white min-w-[640px] border rounded-[10px]" key={`question-${idx}`}>
                            <div>{item.question}</div>
                            <form>
                                {
                                    item.answer.map((content, index) => (
                                        <div key={index}>
                                            <input type="radio" id={content} name={`answer-${index}`} value={content} />
                                        </div>
                                    ))
                                }
                            </form>
                        </div>
                    )
                })
            }
        </>

    )
}

export default QuestionCard;