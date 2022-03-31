require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// COMMENT

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'ssr-test',
    },
    plugins: [`gatsby-plugin-gatsby-cloud`],
}
