export default class Request {
  constructor(url) {
    this.url = url;
  }
  get = async () => await fetch(this.url).then((response) => response.json());

  post = async (data) =>
    await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    }).then((response) => response.json());

  put = async (id, data) =>
    await fetch(`${this.url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    }).then((response) => response.json());

  delete = async (id) =>
    await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    }).then(() => "Veri Silindi");
}
