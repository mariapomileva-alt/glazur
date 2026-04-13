/**
 * Glazur — edit links and storefront URLs here only.
 * Store admin: https://admin.shopify.com/store/glazurshop
 * Customer storefront: use primary domain in Shopify (Online Store → Domains), or .myshopify.com below.
 */
window.GLAZUR_CONFIG = {
  brandName: "Glazur",

  email: "info@glazurshop.com",

  /** Glazur Shopify store (slug glazurshop). Swap for your primary domain if buyers never see .myshopify.com */
  shopifyStoreUrl: "https://glazurshop.myshopify.com",
  /** Default collection when a specific collection URL is not set */
  shopifyDefaultCollectionUrl: "https://glazurshop.myshopify.com/collections/all",

  /**
   * Optional: full URLs to each collection (Products → Collections → open collection → copy storefront URL).
   * Leave "" to use shopifyDefaultCollectionUrl for that link.
   */
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
