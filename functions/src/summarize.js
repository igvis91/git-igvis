function summarize() {
  const args = Array.from(arguments);
  const list = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;
  return Promise.all(list).then((values) =>
    values.reduce((sum, value) => sum + value, 0)
  );
}

module.exports = { summarize };

