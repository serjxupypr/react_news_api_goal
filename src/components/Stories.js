import React from 'react';
import { connect } from 'react-redux';
import './stories.css';
import Story from './Story';
import StoriesHeader from './StoriesHeader';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';


const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const Stories = ({stories, onArchive}) => 
  <div className="stories-card-holder">
    <StoriesHeader columns={COLUMNS} />

    {
      (stories || []).map(story => {
        return (
          <Story 
            key={story.objectID}
            story={story}
            columns={COLUMNS}
            onArchive={onArchive}
          />
        )
      })
    }
  </div>

const mapStateToProps = state => ({
  stories: getReadableStories(state),
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
