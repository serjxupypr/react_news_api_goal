import React from 'react';
import { Link } from 'react-router-dom';
import './story.css';
import PropTypes from 'prop-types';

const Story = ({ story, storyId }) => {
  
    return (
      <div className="stories-card-item">
        <Link to={`/stories/${storyId}`} className="story-link">
          <h3 className="story-title"
          style={{
            display: 'block',
            marginRight: '20px'
          }}>
            {story.title}
          </h3>
        </Link>
      </div>
    )
}

Story.propTypes = {
  story: PropTypes.object.isRequired,
  storyId: PropTypes.number.isRequired,
}

export default Story;