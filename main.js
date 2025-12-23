// Geek out with Me! - Main JavaScript

// ============================================
// CTA Link Configuration
// ここでリンク先を一括変更できます
// ============================================
const CTA_CONFIG = {
  url: 'https://example.com/contact',  // ここにお問い合わせフォームのURLを設定
  // url: 'mailto:example@email.com',  // メールリンクの場合
  // url: 'https://line.me/...',       // LINEリンクの場合
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
