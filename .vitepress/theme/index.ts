import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme"
import PTeamMembers from "./PTeamMembers.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PTeamMembers", PTeamMembers);
  }
} satisfies Theme;