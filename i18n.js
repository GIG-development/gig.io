module.exports = {
  locales: ['en', 'es-mx', 'ja', 'zh-cn'],
  defaultLocale: 'en',
  pages: {
    '*': ['templates', 'components'],
  },
  loadLocaleFrom: async (lang, ns) => {
    const general = require(`@nft/${ns}/locales/${lang}/${ns}.json`)
    try {
      const overrides = require(`./locales/${lang}/${ns}.json`)
      return {
        ...general,
        ...overrides,
      }
    } catch (e) {
      return general
    }
  },
}