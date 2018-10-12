const base = {
  name: 'Gatsby Starter Kit',
  url: 'https://github.com/greglobinski/gatsby-starter-kit'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - a set of starters for Gatsby.js`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a set of starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'a set of starters for Gatsby.js',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
