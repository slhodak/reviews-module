const comparisons = {
  'Highest Rating': (reviewA, reviewB) => {
    const diff = reviewB.overall - reviewA.overall;
    if (diff !== 0) {
      return diff;
    }
    return comparisons.Newest(reviewA, reviewB);
  },
  'Lowest Rating': (reviewA, reviewB) => {
    const diff = reviewA.overall - reviewB.overall;
    if (diff !== 0) {
      return diff;
    }
    return comparisons.Newest(reviewA, reviewB);
  },
  Newest: (reviewA, reviewB) => {
    const dateB = new Date(reviewB.date);
    const dateA = new Date(reviewA.date);
    return dateB.getTime() - dateA.getTime();
  }
};

export default comparisons;
