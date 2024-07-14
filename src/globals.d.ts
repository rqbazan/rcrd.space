/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  readonly PUBLIC_CLOUDINARY_FOLDER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
