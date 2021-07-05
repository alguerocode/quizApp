import {API_interface} from '../types/api-interface';

class RESULTS_API implements API_interface {
  public url:string = 'YOUR_SERVER_URL';

  public fetch_all() {
    return fetch(this.url, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
  public post(result: object) {
    return fetch(this.url, {
      body: JSON.stringify(result),
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
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }
}

export const ResultsAPI = new RESULTS_API();
