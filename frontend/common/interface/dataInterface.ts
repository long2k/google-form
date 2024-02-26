export interface FormInterface  {
    title: string;
    data:[QuestionInterface]
}

interface QuestionInterface {
    question: string
}

export interface UserInterface {
    name: string;
    email: string;
    image: string;
}