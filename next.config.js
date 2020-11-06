const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// const { PHASE_PRODUCTION_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        cdn_url: "https://d3fovccuxy7ns6.cloudfront.net/",
        customKey2: "ssskkk",
        customKey3: "i000077770ii",
        global_url: "http://3.7.47.242",
      },
    };
  }
  return {
    env: {
      cdn_url: "https://d3fovccuxy7ns6.cloudfront.net/",
      customKey2: "ssskkk",
      customKey3: "i000077770ii",
      global_url: "http://3.7.47.242",
    },
  };
};
