const comparisons = {
  'Highest Rating': (reviewA, reviewB) => {
    const diff = reviewB.overall - reviewA.overall;
    if (diff !== 0) {
      return diff;
    }
    const dateB = new Date(reviewB.date);
    const dateA = new Date(reviewA.date);
    return dateB.getTime() - dateA.getTime();
  },
  'Lowest Rating': (reviewA, reviewB) => {
    const diff = reviewA.overall - reviewB.overall;
    if (diff !== 0) {
      return diff;
    }
    const dateB = new Date(reviewB.date);
    const dateA = new Date(reviewA.date);
    return dateB.getTime() - dateA.getTime();
  },
  Newest: (reviewA, reviewB) => {
    const dateB = new Date(reviewB.date);
    const dateA = new Date(reviewA.date);
    return dateB.getTime() - dateA.getTime();
  }
};

export default comparisons;
