declare global {
  interface Window {
    SITE_NAME: string
  }
}

export type SiteConfig = typeof siteConfig;

console.log(window.SITE_NAME)

export const siteConfig = {
  name: window.SITE_NAME + "some value",
  description: "Make beautiful websites regardless of your design experienceMake beautiful websites regardless of your design experienceMake beautiful websites regardless of your design experience",
  navItems: [
    {
      label: "Tags",
      href: "/tags",
    },
    {
      label: "Favorites",
      href: "/favorites",
    }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/ByronBingham/mediaDB",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
