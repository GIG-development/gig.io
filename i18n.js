module.exports = {
  locales: ["en", "es-mx"],
  defaultLocale: "es-mx",
  pages: {
    "*": ["templates", "components"],
  },
  loadLocaleFrom: async (lang, ns) => {
    const general = require(`@nft/${ns}/locales/${lang}/${ns}.json`);
    try {
      const overrides = require(`./locales/${lang}/${ns}.json`);
      // TODO: Add deep merge instead of merge so we can override absolutely everything
      return {
        ...general,
        ...overrides,
      };
    } catch (e) {
      return general;
    }
  },
};
