import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './lastViewedPosts.css';

let storage = window.localStorage;
let content;

class LastViewedPosts extends Component {

  componentWillMount() {
    const viewedPosts = !storage.viewedPosts ? [] : JSON.parse(storage.getItem('viewedPosts'));

    content = (
      <Fragment>
          <h2 className="section-title">{!viewedPosts.length? 'There are not viewed posts yet...' : 'Last posts you have viewed'}</h2>
          {
            !viewedPosts.length ? '': 
            <div className="viewed-posts-holer">
              {
                viewedPosts.map((post, index) => (
                  <div key={index} className="last-viewed-posts-item">
                    <Link to={post.pagePath} className="viewed-posts-item-link">
                      <div className="img-holder">
                        <img src="/assets/images/post-image.jpg" alt="site logo"/>
                      </div>
                      <div className="text-holder">
                        <h2 className="post__title">
                          {post.title}
                        </h2>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          }

      </Fragment>
    )
  }

  render() {
    return (
      <div className="last-viewed-posts">
        <div className="container">
          {content}
        </div>
      </div>
    )
  }
};

export default LastViewedPosts;

