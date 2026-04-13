/**
 * Glazur — edit links and storefront URLs here only.
 * Shopify: replace YOUR-STORE with your shop subdomain or use custom domain.
 */
window.GLAZUR_CONFIG = {
  brandName: "Glazur",

  email: "info@glazurshop.com",

  shopifyStoreUrl: "https://YOUR-STORE.myshopify.com",
  /** Default collection when a specific collection URL is not set */
  shopifyDefaultCollectionUrl: "https://YOUR-STORE.myshopify.com/collections/all",

  /** Optional: deep links for catalog (mirror glazurshop.ru categories) */
  collections: {
    newArrivals: "",
    blouses: "",
    stripes: "",
    skirts: "",
    dresses: "",
    knitwear: "",
  },

  social: {
    instagram: "https://www.instagram.com/glazurshop_com",
    facebook: "https://www.facebook.com/glazurshop",
    youtube: "https://youtube.com/@glazurshop_com",
    pinterest: "https://www.pinterest.com/glazurshop_com",
    /** RU-style header icons — paste real links from glazurshop.ru when ready */
    telegram: "",
    vk: "",
    whatsapp: "",
  },

  /** Promo strip + modal (tone aligned with glazurshop.ru). Connect to Klaviyo / Shopify in production. */
  promo: {
    dialogTitle: "Bonjour!",
    headline: "Want 10% off your first order? — We’re always close by",
    subline:
      "Leave your email and we’ll send a code. Natural fabrics, effortless silhouettes — transform your everyday with Glazur.",
    cta: "Send",
    legal:
      "By subscribing, you agree to receive marketing emails. Unsubscribe anytime.",
    success: "Your 10% code is on its way! Check your inbox.",
  },
};
