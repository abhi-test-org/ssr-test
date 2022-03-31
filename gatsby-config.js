require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// Look at this, its the gatsby-config from my repo.

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'ssr-test-monaco-editor',
    },
    plugins: [`gatsby-plugin-gatsby-cloud`],
}
