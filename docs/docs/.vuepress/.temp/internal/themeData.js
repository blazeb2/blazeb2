export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Github\",\"link\":\"https://github.com/Rr210/blazeB2\"}],\"locales\":{\"/en/\":{\"selectLanguageName\":\"English\"},\"/zh/\":{\"selectLanguageName\":\"简体中文\"},\"/\":{\"selectLanguageName\":\"English\"}},\"sidebar\":[\"/zh/guide/summary\",\"/zh/guide/\",\"/zh/guide/page/\",\"/zh/guide/deploy/\",\"/zh/guide/config/\",\"/zh/guide/contribution\"],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}