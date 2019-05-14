const isNotArchived = archivedIds => story => {
  return archivedIds.indexOf(story.objectID) === -1;
}

const getReadableStories = ({ storyState, archiveState }) => {
  return storyState.filter(isNotArchived(archiveState));
}

export {
  getReadableStories,
}