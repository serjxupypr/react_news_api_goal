import { connect } from 'react-redux';
import Commentaries from '../components/commentaries/commentaries';
import getPostComments from '../actions/singlePostComment';

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