import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER_NAME } from "astro:env/server";

type ImageUrlConfig = {
  format?: "webp" | "jpg" | "png";
  transform?: string;
};

const DEFAULT_CONFIG: ImageUrlConfig = {
  format: "webp",
};

export function getImageUrl(pathId: string, config?: ImageUrlConfig): string {
  const fullPathId = `${CLOUDINARY_FOLDER_NAME}/${pathId}`;

  return transformImageUrl(
    `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${fullPathId}.webp`,
    config ?? DEFAULT_CONFIG,
  );
}

export function transformImageUrl(_src: string, _config: ImageUrlConfig): string {
  const config = { ...DEFAULT_CONFIG, ..._config };
  let src = `${_src}`;

  if (config.transform) {
    src = src.replace("upload/", `upload/${config.transform}/`);
  }

  if (config.format) {
    const ext = src.split(".").pop();
    src = src.replace(`.${ext}`, `.${config.format}`);
  }

  return src;
}
