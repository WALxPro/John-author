/**
 * Single source of truth for every external link.
 * Replace the placeholder URLs before launch.
 */
export const LINKS = {
  retailers: {
    amazon: "https://www.amazon.com/", // TODO: product URL
    appleBooks: "https://books.apple.com/", // TODO
    kobo: "https://www.kobo.com/", // TODO
    kindle: "https://www.amazon.com/kindle", // TODO
    barnesNoble: "https://www.barnesandnoble.com/", // TODO
  },
  social: {
    facebook: "https://www.facebook.com/", // TODO
    instagram: "https://www.instagram.com/", // TODO
    x: "https://x.com/", // TODO
    tiktok: "https://www.tiktok.com/", // TODO
    goodreads: "https://www.goodreads.com/", // TODO
    youtube: "https://www.youtube.com/", // TODO
  },
  email: "author@example.com", // TODO: placeholder contact address
  credit: "https://chicagowrite.com",
};

export const RETAILERS = [
  { key: "amazon", label: "Amazon" },
  { key: "appleBooks", label: "Apple Books" },
  { key: "kobo", label: "Kobo" },
  { key: "kindle", label: "Kindle" },
  { key: "barnesNoble", label: "Barnes & Noble" },
];

export const MARQUEE_RETAILERS = [
  { key: "appleBooks", label: "Apple Books" },
  { key: "kobo", label: "Kobo" },
  { key: "kindle", label: "Amazon Kindle" },
  { key: "barnesNoble", label: "Barnes & Noble" },
  { key: "amazon", label: "Amazon" },
];

export const SOCIALS = [
  { key: "facebook", label: "Facebook" },
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
  { key: "goodreads", label: "Goodreads" },
  { key: "youtube", label: "YouTube" },
];
