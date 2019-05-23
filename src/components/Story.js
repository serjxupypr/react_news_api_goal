import React from 'react';
import './story.css';

const Story = ({story }) => {
  
    return (
      <div className="stories-card-item">
        <h3 className="story-title"
        style={{
          display: 'block',
          marginRight: '20px'
        }}>
          <a href={story.url}>{story.title}</a>
        </h3>

        <span className="story-text">
          {story.body}
        </span>
      </div>
    )
}

export default Story;