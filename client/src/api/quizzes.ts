import {Quiz_API_interface} from '../types/api-interface';

class QUIZ_API implements Quiz_API_interface {
  public url: string = 'http://localhost:8080';

  public fetch_all() {
    return fetch(this.url + '/quizzes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  public post(quiz: object) {
    return fetch(this.url + "/quizzes",{
      body:JSON.stringify(quiz),
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  }
  public delete(_id: string) {
    return fetch(this.url + "quizzes",{
      method:"DELETE",
      body:JSON.stringify(_id),
      headers:{
        "Content-Types":"application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  }
}

export const QuizAPI = new QUIZ_API();