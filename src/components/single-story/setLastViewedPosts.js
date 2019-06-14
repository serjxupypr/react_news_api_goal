let storage = window.localStorage;

let viewedPosts = !storage.viewedPosts ? [] : JSON.parse(storage.getItem('viewedPosts'));

// check existence of current post in the storage (viewed posts)
const isPostExist = (postData) => {
  let match = 0;

  viewedPosts.map((post) => {
    if ( post.pagePath === `/stories/${postData.id}` ) {
      match +=1;
    }
  });

  return match > 0 ? true: false;
}

// current post to the storage if it doesn't exist (viewed posts)
const setLastViewedPosts = (postData) => {

  if(!isPostExist(postData)) {
    
    if ( !viewedPosts.length || viewedPosts.length < 4 ) {
      viewedPosts.unshift({
        title: postData.title,
        userId: postData.userId,
        pagePath: `/stories/${postData.id}`,
      });
    } else {
      viewedPosts.pop();
      viewedPosts.unshift({
        title: postData.title,
        userId: postData.userId,
        pagePath: `/stories/${postData.id}`,
      });
    }

    storage.setItem('viewedPosts', JSON.stringify(viewedPosts));
  };
}

export default setLastViewedPosts;