module.exports = {
  //-- SITE SETTINGS -----
  author: "@sdtr",
  siteTitle: "Software Development Turkey",
  siteShortTitle: "SDTR", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Yazılımcı, tasarımcı ve yetenekli insanların buluştuğu kocaman bir aile!",
  siteUrl: "https://sdtr.netlify.app",
  // TODO: SITEYI DEGISTIR
  siteLanguage: "tr_TR",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "SDTR", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // Yukarıdaki siteye girip "https://medium.com/feed/software-development-turkey" yapistir ve orada cikan
  // API call linkini asagiya yapistir
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fsoftware-development-turkey",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance

  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/softwaredevelopmentturkey/",
    },
    {
      name: "Medium",
      url: "https://medium.com/software-development-turkey",
    },
    {
      name: "Github",
      url: "https://github.com/sdtrdev",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Makalelerimiz",
        url: "/#articles",
      },
      {
        name: "Hakkımızda",
        url: "/#about",
      },
      {
        name: "Projelerimiz",
        url: "/#projects",
      },
    ],
    button: {
      name: "Bize Ulaşın",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Gizlilik",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
