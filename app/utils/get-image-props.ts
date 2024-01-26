import { env } from "~/env";

export interface ImageProps {
  src: string;
}

export function getImageProps(pathId: string): ImageProps {
  const fullPathId = `${env.CLOUDINARY_FOLDER_NAME}/${pathId}`;

  return {
    src: `https://res.cloudinary.com/${env.CLOUDINARY_CLOUD_NAME}/image/upload/${fullPathId}.webp`,
  };
}
