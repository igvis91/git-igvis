function getAllData(database) {
  const delayed = new Promise((resolve) => {
    setTimeout(() => resolve(database), 1000);
  });
  return Promise.all([delayed]).then(([data]) => data);
}

module.exports = { getAllData };

