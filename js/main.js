/* ==========================================================
   Wail Hannachi — Portfolio script (vanilla JS, no libraries)
   1. Translations   2. Language   3. Theme   4. Mobile menu
   5. Scroll reveal  6. Active link  7. Card tilt   8. Init
   ========================================================== */

(function () {
  'use strict';

  /* ---------- 1. TRANSLATIONS ----------
     To change any text: edit it here, using the same key as the
     data-i18n="..." attribute in index.html. */
  var T = {
    en: {
      skip: 'Skip to content',
      nav_about: 'About', nav_skills: 'Skills', nav_exploring: 'Exploring',
      nav_presentations: 'Presentations', nav_contact: 'Contact',
      aria_lang: 'Switch language', aria_theme: 'Toggle dark and light theme', aria_menu: 'Open menu',

      hero_eyebrow: 'Portfolio',
      hero_hi: "Hi, I'm",
      hero_name: 'Wail Hannachi.',
      hero_tagline: 'I enjoy solving problems and building things.',
      hero_sub: 'A technology enthusiast exploring software development, workflow automation, and creative presentation design.',
      hero_btn_work: 'Explore My Work',
      hero_btn_contact: 'Get in Touch',
      portrait_alt: 'Portrait of Wail Hannachi',

      
about_title: 'About Me',
about_p1: "I'm a university student specializing in Artificial Intelligence, passionate about programming, automation, and exploring how technology can solve real-world problems.",
about_p2: "I'm passionate about learning, building, and improving. I focus on understanding concepts deeply, thinking logically, and learning through practice. Every challenge is an opportunity to grow and create something meaningful.",
about_p3: "Beyond programming, I'm passionate about designing presentations that turn ideas into clear, engaging, and well-structured slides. I enjoy combining creativity and technology to bring ideas to life.",

      about_facts_aria: 'Quick facts',
      fact1_t: 'Problem solving', fact1_d: 'Breaking problems into clear steps',
      fact2_t: 'Continuous learning', fact2_d: 'Building strong fundamentals first',
      fact3_t: 'Creative design', fact3_d: 'Clean, structured presentations',

      skills_title: 'Skills',
      skills_sub: 'Honest learning levels, not made-up percentages.',
      lvl1: 'Beginner', lvl2: 'Fundamentals', lvl3: 'Practicing',
      meter1: 'Level 1 of 3', meter2: 'Level 2 of 3', meter3: 'Level 3 of 3',
      legend_1: '1 · Beginner', legend_2: '2 · Fundamentals', legend_3: '3 · Practicing',

      exploring_title: 'Currently Exploring',
      ex1_t: 'Programming Fundamentals', ex1_d: 'Variables, control flow, functions and clean code habits.',
      ex2_t: 'Algorithms', ex2_d: 'Thinking step by step and understanding how solutions scale.',
ex3_t: 'Backend Development',
ex3_d: 'Focused on backend development with C# and .NET Core, with basic frontend skills in HTML, CSS and JavaScript.',
       ex4_t: 'Workflow Automation', ex4_d: 'Connecting tools and automating repetitive tasks with n8n.',

      pres_title: 'Presentation Design',
      pres_sub: 'Professional, academic presentations: structuring ideas and making existing slides clearer.',
      pres_gallery: 'Slide Gallery',
      ph_slide: 'Add your slide screenshot here',
      cap_slide1: 'Project title — short description',
      cap_slide2: 'Project title — short description',
      cap_slide3: 'Project title — short description',
      fb_title: 'Client Feedback',
      fb_sub: "Real messages from people I've worked with on presentations (screenshots).",
      fb_alt1: "Screenshot of a client's feedback message in Arabic praising the presentation design",
      fb_alt2: "Screenshot of a client's thank-you message in Arabic",
      fb_alt3: 'Screenshot of a conversation in Arabic with a client about a research presentation',
      fb_alt4: "Screenshot of a client's friendly message after receiving a presentation",
      fb_alt5: 'Screenshot of a short positive reply in Arabic',
      social_title: 'Presentation Design — Social Pages',
      social_sub: 'Follow my PowerPoint work on these pages.',

      contact_title: 'Get in Touch',
      contact_sub: 'Interested in working together, or just want to talk tech? Reach out.',
      prof_title: 'Professional Profile',
      prof_sub: 'My personal professional profile.',
      linkedin_btn: 'View LinkedIn',
      pres_contact_title: 'Presentation Requests',
      pres_contact_sub: 'For presentation design work, message me on my presentation pages.',
      pres_contact_btn: 'See social pages',
      email_title: 'Email',

      footer_rights: 'All rights reserved.',
      footer_top: 'Back to top ↑',
      page_title: 'Wail Hannachi — Portfolio'
    },

    ar: {
      skip: 'تخطَّ إلى المحتوى',
      nav_about: 'نبذة', nav_skills: 'المهارات', nav_exploring: 'أستكشف',
      nav_presentations: 'العروض', nav_contact: 'تواصل',
      aria_lang: 'تغيير اللغة', aria_theme: 'التبديل بين الوضع الداكن والفاتح', aria_menu: 'فتح القائمة',

      hero_eyebrow: 'معرض الأعمال',
      hero_hi: 'مرحباً، أنا',
      hero_name: 'وائل حناشي.',
      hero_tagline: 'أستمتع بحل المشكلات وبناء الأشياء.',
      hero_sub: 'مهتم بالتكنولوجيا، أستكشف تطوير البرمجيات وأتمتة سير العمل وتصميم العروض التقديمية الإبداعية.',
      hero_btn_work: 'استكشف أعمالي',
      hero_btn_contact: 'تواصل معي',
      portrait_alt: 'صورة شخصية لوائل حناشي',
about_title: 'نبذة عني',
about_p1: 'أنا طالب جامعي أدرس تخصص الذكاء الاصطناعي، وشغوف بالبرمجة والأتمتة واستكشاف كيفية استخدام التكنولوجيا لحل المشكلات الواقعية.',
about_p2: 'أنا شغوف بالتعلم والبناء والتطور. أركز على فهم المفاهيم بعمق، والتفكير المنطقي، والتعلم من خلال التطبيق العملي. أرى في كل تحدٍ فرصة للنمو وتطوير مهاراتي وإنجاز شيء ذي قيمة.',
about_p3: 'إلى جانب البرمجة، أنا شغوف بتصميم العروض التقديمية التي تحوّل الأفكار إلى شرائح واضحة وجذابة ومنظمة جيدًا. أستمتع بالجمع بين الإبداع والتكنولوجيا لتحويل الأفكار إلى واقع.',
      about_facts_aria: 'حقائق سريعة',
      fact1_t: 'حل المشكلات', fact1_d: 'تقسيم المشكلات إلى خطوات واضحة',
      fact2_t: 'التعلم المستمر', fact2_d: 'بناء أساس قوي أولاً',
      fact3_t: 'تصميم إبداعي', fact3_d: 'عروض تقديمية نظيفة ومنظمة',

      skills_title: 'المهارات',
      skills_sub: 'مستويات تعلّم صادقة، وليست نسباً مئوية مختلقة.',
      lvl1: 'مبتدئ', lvl2: 'أساسيات', lvl3: 'تطبيق عملي',
      meter1: 'المستوى 1 من 3', meter2: 'المستوى 2 من 3', meter3: 'المستوى 3 من 3',
      legend_1: '1 · مبتدئ', legend_2: '2 · أساسيات', legend_3: '3 · تطبيق عملي',

      exploring_title: 'ما أستكشفه حالياً',
      ex1_t: 'أساسيات البرمجة', ex1_d: 'المتغيرات، التحكم في التدفق، الدوال، وعادات الكتابة النظيفة.',
      ex2_t: 'الخوارزميات', ex2_d: 'التفكير خطوة بخطوة وفهم كيف تتوسع الحلول.',
ex3_t: 'تطوير الواجهات الخلفية',
ex3_d: 'أركز على تطوير الواجهات الخلفية باستخدام C# و.NET Core، مع امتلاك أساسيات تطوير الواجهات الأمامية باستخدام HTML وCSS وJavaScript.',
      ex4_t: 'أتمتة سير العمل', ex4_d: 'ربط الأدوات وأتمتة المهام المتكررة باستخدام n8n.',

      pres_title: 'تصميم العروض التقديمية',
      pres_sub: 'عروض تقديمية احترافية وأكاديمية : تنظيم الأفكار وتحسين الشرائح الموجودة لتصبح أوضح.',
      fb_title: 'آراء العملاء',
      fb_sub: 'رسائل حقيقية من أشخاص عملت معهم على عروض تقديمية (لقطات شاشة).',
      fb_alt1: 'لقطة شاشة لرسالة من عميل بالعربية يشيد فيها بتصميم العرض',
      fb_alt2: 'لقطة شاشة لرسالة شكر من عميل بالعربية',
      fb_alt3: 'لقطة شاشة لمحادثة بالعربية مع عميل حول عرض بحثي',
      fb_alt4: 'لقطة شاشة لرسالة ودّية من عميل بعد استلام العرض',
      fb_alt5: 'لقطة شاشة لرد إيجابي قصير بالعربية',
      social_title: 'تصميم العروض التقديمية — صفحات التواصل',
      social_sub: 'تابع أعمالي في PowerPoint عبر هذه الصفحات.',

      contact_title: 'تواصل معي',
      contact_sub: 'هل تريد العمل معاً، أو الحديث عن التقنية؟ راسلني.',
      prof_title: 'الملف المهني',
      prof_sub: 'ملفي المهني الشخصي.',
      linkedin_btn: 'عرض LinkedIn',
      pres_contact_title: 'طلبات العروض التقديمية',
      pres_contact_sub: 'لطلبات تصميم العروض، راسلني عبر صفحات العروض التقديمية.',
      pres_contact_btn: 'عرض صفحات التواصل',
      email_title: 'البريد الإلكتروني',

      footer_rights: 'جميع الحقوق محفوظة.',
      footer_top: 'العودة للأعلى ↑',
      page_title: 'وائل حناشي — معرض الأعمال'
    }
  };

  var root = document.documentElement;

  /* Safe wrappers: localStorage can be blocked (private mode) */
  function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  /* ---------- 2. LANGUAGE ---------- */
  function setLang(lang) {
    if (!T[lang]) lang = 'en';
    var dict = T[lang];

    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.title = dict.page_title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-alt');
      if (dict[k] !== undefined) el.setAttribute('alt', dict[k]);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (dict[k] !== undefined) el.setAttribute('aria-label', dict[k]);
    });

    // The button shows the language you can switch TO
    var label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'ar' ? 'EN' : 'AR';

    store('lang', lang);
  }

  function initLang() {
    var saved = read('lang');
    setLang(saved === 'ar' ? 'ar' : 'en');
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', function () {
      setLang(root.getAttribute('lang') === 'ar' ? 'en' : 'ar');
    });
  }

  /* ---------- 3. THEME ---------- */
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    store('theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#F5F9FF' : '#080B12');
  }

  function initTheme() {
    var btn = document.getElementById('theme-toggle');
    setTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    if (btn) btn.addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }

  /* ---------- 4. MOBILE MENU ---------- */
  function initMenu() {
    var btn = document.getElementById('menu-toggle');
    var list = document.getElementById('nav-links');
    if (!btn || !list) return;

    function close() {
      list.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    btn.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.classList.contains('open')) { close(); btn.focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 780) close(); });
  }

  /* ---------- 5. SCROLL REVEAL ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add('visible');
          io.unobserve(el);
          // After the reveal finishes, switch to fast hover transitions
          setTimeout(function () { el.style.transitionDelay = ''; el.classList.add('revealed'); }, 1000);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el, i) {
      // small stagger for siblings
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* ---------- 6. ACTIVE NAV LINK ---------- */
  function initActiveLink() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    if (!('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
          var a = map[entry.target.id];
          if (a) { a.classList.add('active'); a.setAttribute('aria-current', 'true'); }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }

  /* ---------- 7. CARD TILT (desktop mouse only) ---------- */
  function initTilt() {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;

    document.querySelectorAll('.tilt').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = 'perspective(700px) rotateX(' + (-y * 6) + 'deg) rotateY(' + (x * 6) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ---------- 8. INIT ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    root.classList.remove('no-js');
    initLang();
    initTheme();
    initMenu();
    initReveal();
    initActiveLink();
    initTilt();
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  });
})();
