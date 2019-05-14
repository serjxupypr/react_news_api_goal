import React from 'react';
import './story.css';
import ButtonInline from './Button';

const Story = ({story, columns, onArchive}) => {
  
    return (
      <div className="stories-card-item">
        <h3 className="story-title" 
          style={{width: columns.title.width}}
        >
          <a href={story.url}>{story.title}</a>
        </h3>

        <span className="story-author"
          style={{width: columns.author.width}}
        >
          {story.author}
        </span>

        <span className="story-comments-qty"
          style={{width: columns.comments.width}}
        >
          {story.num_comments}
        </span>

        <span className="story-points"
          style={{width: columns.points.width}}
        >
          {story.points}
        </span>
        <span className="story-add-to-archive"
          style={{ width: columns.archive.width }}
        >
          <ButtonInline onClick={() => {onArchive(story.objectID)}} btnText={'archive'} />
        </span>
      </div>
    )
}

export default Story;