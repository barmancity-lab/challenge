const getLegacy = (country, commerce, channel) => {
  return {
    'mdw-cs-country': country,
    'mdw-cs-commerce': commerce,
    'mdw-cs-channel': channel
  };
};

module.exports = {
  getLegacy
};
