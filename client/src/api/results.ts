import {API_interface} from '../types/api-interface';

class RESULTS_API implements API_interface {
  public url:string = 'http://localhost:8080';

  public fetch_all() {
    return fetch(this.url + '/results', {
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
    return fetch(this.url + '/results', {
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
    return fetch(this.url + 'results' + _id, {
      method: 'DELETE',
      headers: {
        'Content-Types': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}

export const ResultsAPI = new RESULTS_API();
