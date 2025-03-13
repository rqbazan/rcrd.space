interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_FOLDER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare let posthog: {
  init: (token: string, config: { api_host: string; person_profiles: string }) => void;
  capture(event: string, properties?: Record<string, unknown>): void;
};

interface Window {
  posthog: typeof posthog;
}
