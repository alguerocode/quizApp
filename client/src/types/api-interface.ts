
export interface API_interface {
  url: string;
  fetch_all: Function;
  post: (result: object) => object;
  delete: (_id: string) => object;
}
