const sortProducts = (products, sortOrder) => {
  // sort a-z
  if (sortOrder === 'ASC') {
    return products.sort((a, b) => {
      if (a.title > b.title) return 1;
      return -1;
    });
  }

  // sort z-a
  if (sortOrder === 'DESC') {
    return products.sort((a, b) => {
      if (a.title > b.title) return -1;
      return 1;
    });
  }
};

export { sortProducts };
