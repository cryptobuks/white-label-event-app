export const SortByDate = trackSessions => trackSessions.sort((a, b) => new Date(a.date) - new Date(b.date));
