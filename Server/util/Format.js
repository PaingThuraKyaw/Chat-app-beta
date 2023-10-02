module.exports = format = (username, message) => {
  return {
    username,
    message,
    setup_time: Date.now(),
  };
};
