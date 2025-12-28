// Geek out with Me! - Main JavaScript

// ============================================
// CTA Link Configuration
// ここでリンク先を一括変更できます
// ============================================
const CTA_CONFIG = {
  url: 'https://lin.ee/GfasAMn',  // LINE友達追加リンク
};

// ============================================
// Initialize CTA Links
// ============================================
function initCtaLinks() {
  const ctaLinks = document.querySelectorAll('[data-cta-link]');

  ctaLinks.forEach(link => {
    link.href = CTA_CONFIG.url;
  });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', initCtaLinks);
