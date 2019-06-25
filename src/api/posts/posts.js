import getData from "../getRequest";

class Posts {

  constructor() {
    if (!Posts.instance) {
      Posts.instance = this;
    }

    return Posts.instance;
  }


  getAllPosts(url) {
    return getData(url)
    .then(response => response.json())
    .then(response => response);
  }

  getSinglePost(url) {
    return getData(url)
    .then(response => response.json())
    .then(response => response);
  }
}

const instance = new Posts();
Object.freeze(instance);

export { instance as Posts };