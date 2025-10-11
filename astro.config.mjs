import { defineConfig } from "astro/config";
import icon from 'astro-icon';

export default defineConfig({
  site: "https://acmellinger.com",
  integrations: [icon()],
});
