(function () {
  var cfg = window.GLAZUR_CONFIG || {};

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function collectionUrl(key) {
    var c = cfg.collections || {};
    var u = c[key];
    if (u) return u;
    return cfg.shopifyDefaultCollectionUrl || cfg.shopifyStoreUrl || "#";
  }

  function applyLinks() {
    var shop = cfg.shopifyStoreUrl || "#";
    var defCol = cfg.shopifyDefaultCollectionUrl || shop;
    $$(".js-config-shop").forEach(function (a) {
      a.href = shop;
    });
    $$(".js-config-collection-default").forEach(function (a) {
      a.href = defCol;
    });
    $$("[data-collection]").forEach(function (a) {
      var k = a.getAttribute("data-collection");
      a.href = collectionUrl(k);
    });

    var mail = "mailto:" + (cfg.email || "");
    $$(".js-config-mailto").forEach(function (a) {
      a.href = mail;
    });

    var s = cfg.social || {};
    var map = {
      "js-config-ig": s.instagram,
      "js-config-fb": s.facebook,
      "js-config-yt": s.youtube,
      "js-config-pin": s.pinterest,
    };
    Object.keys(map).forEach(function (cls) {
      $$("." + cls).forEach(function (a) {
        if (map[cls]) a.href = map[cls];
      });
    });
  }

  function applyPromoCopy() {
    var p = cfg.promo || {};
    var el = function (id, text) {
      var n = document.getElementById(id);
      if (n && text) n.textContent = text;
    };
    el("promo-headline", p.headline);
    el("promo-subline", p.subline);
    el("promo-cta", p.cta);
    el("promo-dialog-title", p.dialogTitle);
    el("promo-legal", p.legal);
    el("promo-legal-modal", p.legal);
    el("promo-success", p.success);
  }

  function navToggle() {
    var btn = $("#nav-toggle");
    var nav = $("#site-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  function promoBar() {
    var bar = $("#promo-bar");
    if (!bar) return;
    var dismissed = false;
    try {
      dismissed = sessionStorage.getItem("glazur_promo_dismiss") === "1";
    } catch (e) {}
    if (dismissed) {
      bar.hidden = true;
      document.body.classList.remove("has-promo");
      return;
    }
    bar.hidden = false;
    document.body.classList.add("has-promo");
    var close = $("#promo-close");
    if (close) {
      close.addEventListener("click", function () {
        bar.hidden = true;
        document.body.classList.remove("has-promo");
        try {
          sessionStorage.setItem("glazur_promo_dismiss", "1");
        } catch (e) {}
      });
    }
  }

  function promoModal() {
    var openBtn = $("#promo-open-modal");
    var modal = $("#promo-modal");
    if (!openBtn || !modal) return;
    var overlay = $(".promo-modal__overlay", modal);
    var closeBtn = $(".promo-modal__close", modal);
    var form = $("#promo-form");

    function open() {
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      open();
    });
    if (overlay) overlay.addEventListener("click", close);
    if (closeBtn) closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) close();
    });

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = $("#promo-email");
        var em = input && input.value.trim();
        if (!em) return;
        var subj = encodeURIComponent("Glazur newsletter — 10% signup");
        var body = encodeURIComponent("Please add this email to the newsletter list:\n\n" + em);
        window.location.href =
          "mailto:" + (cfg.email || "") + "?subject=" + subj + "&body=" + body;
        var ok = $("#promo-success");
        if (ok) ok.hidden = false;
        form.hidden = true;
      });
    }
  }

  function footerNewsletter() {
    var f = $("#footer-newsletter-form");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = f.querySelector('[name="email"]');
      var em = input && input.value.trim();
      if (!em || !cfg.email) return;
      window.location.href =
        "mailto:" +
        cfg.email +
        "?subject=" +
        encodeURIComponent("Glazur newsletter — 10% signup") +
        "&body=" +
        encodeURIComponent("Please add:\n" + em);
    });
  }

  function faqAccordion() {
    $$(".faq-item").forEach(function (item) {
      var btn = $("button", item);
      var panel = $(".faq-panel", item);
      if (!btn || !panel) return;
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  function yearFooter() {
    var yEl = $("#y");
    if (yEl) yEl.textContent = String(new Date().getFullYear());
  }

  function init() {
    applyLinks();
    applyPromoCopy();
    yearFooter();
    navToggle();
    promoBar();
    promoModal();
    footerNewsletter();
    faqAccordion();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
