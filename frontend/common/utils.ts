import {UserInterface} from "./interface/dataInterface";

const getUser = (email: string) => {
    return fetch(`http://localhost:8001/api/user/${email}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
} 

const saveUser = (data: UserInterface) => {
    return fetch("http://localhost:8001/api/user/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
}

const saveAnswer = (data: string[]) => {
    return fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
}

export {
    getUser,
    saveUser,
    saveAnswer
}