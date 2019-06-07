import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleComment from './singleComment';
import Loader from '../../components/loader/Loader';
import getPostComments from '../../actions/singlePostComment';
import './commentaries.css';


class Commentaries extends Component {

  componentDidMount() {
    this.props.getPostComments(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.postId}`);
  }

  render() {
    let content = !this.props.store.singlePostComments.comments ? 
      <Loader/>
      :
      this.props.store.singlePostComments.comments.map(item => 
        (
          <SingleComment key={item.id} postComment={item}/>
        )
      )

    return (
      <div className="commentaries-holder">
        <div className="commentaries-header">
          <h3 className="commentaries-title">Post commentaries: </h3>
        </div>
        <div className="commentaries-grid">
          {content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = {
  getPostComments,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Commentaries);