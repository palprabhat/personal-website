declare namespace NodeJS {
  export interface ProcessEnv {
    CONTACT_API_URL: string;
    RECAPTCHA_SITE_SECRET: string;
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    NEXT_PUBLIC_GA_TRACKING_ID: string;
  }
}
