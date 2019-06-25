import getData from "../getRequest";

class Comments {

  constructor() {
    if (!Comments.instance) {
      Comments.instance = this;
    }

    return Comments.instance;
  }

  getPostComments(url) {
    return getData(url)
    .then(response => response.json())
    .then(response => response);
  }
}

const instance = new Comments();

Object.freeze(instance);

export { instance as Comments };