import "@testing-library/jest-dom/extend-expect";

process.env = {
  ...process.env,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  RECAPTCHA_SITE_SECRET: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  CONTACT_API_URL: "https://www.test.com",
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ["prabhatpal.com"],
    path: "/_next/image",
    loader: "default",
  },
};
