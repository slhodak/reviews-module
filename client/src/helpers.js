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

const Models = {
  ButtonLinkedList: class {
    constructor(page) {
      this.head = new Models.ButtonListNode(page);
      this.tail = this.head;
    }

    addButtonToTail(page) {
      const newButton = new Models.ButtonListNode(page);
      newButton.previous = this.tail;
      this.tail.next = newButton;
      this.tail = newButton;
    }
  },
  ButtonListNode: (page) => {
    this.page = page;
    this.next = null;
    this.previous = null;
  }
};

export { comparisons, Models };
