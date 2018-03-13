export const sortByDate = (trackSessions, order = 'ASC') => {
  if (order.toUpperCase() === 'DESC') {
    return [...trackSessions.sort((a, b) => new Date(b.date) - new Date(a.date))];
  }

  return [...trackSessions.sort((a, b) => new Date(a.date) - new Date(b.date))];
};
