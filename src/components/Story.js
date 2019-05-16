import React from 'react';
import './story.css';
import ButtonInline from './Button';

const Story = ({story, }) => {
  
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

        <span className="story-add-to-archive">
          <ButtonInline onClick={() => {}} btnText={'archive'} />
        </span>
      </div>
    )
}

export default Story;