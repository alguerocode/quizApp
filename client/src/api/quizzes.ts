import {API_interface} from '../types/api-interface';

class QUIZ_API implements API_interface {
  public url: string = 'http://localhost:8080/';

  public fetch_all() {
    return fetch(this.url, {
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
    return fetch(this.url, {
      body: JSON.stringify(quiz),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  public delete(_id: string) {
    return fetch(this.url + _id, {
      method: 'DELETE',
    }).catch((err) => console.log(err));
  }
  public get_quiz(_id:string) {
    return fetch(this.url + _id, {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  }
}

export const QuizAPI = new QUIZ_API();
