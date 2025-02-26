import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  beforeBody: [],
  afterBody: [],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
    title: "Wayfinder",
    folderClickBehavior: "link",
  }),
  Component.Darkmode(),
  ],
  
  footer: Component.Footer({
    links: {
      "Beyond Love": "https://beyond-love.crd.co/",
      "Discord": "https://discord.gg/4p9fq6PJHf",
    },
  }),
  
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  
  beforeBody: [
    Component.Spacer(),
    Component.Breadcrumbs(),
    /*Component.ContentMeta(),*/
  ],
  body: [
    Component.Spacer(),
    Component.ArticleTitle(),
    /*Component.ContentMeta(),*/
    ],

  right: [
    Component.TagList(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), /*Component.ContentMeta()*/],
  right: [],
}
