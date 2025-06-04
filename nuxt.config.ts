// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  extends: [
    process.env.NODE_ENV === "development"
      ? "../layer"
      : ["github:alexoesmith/nuxt-layer", { install: true }],
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
});
