import { env } from "~/env";

export function getImageUrl(pathId: string) {
  const fullPathId = `${env.CLOUDINARY_FOLDER_NAME}/${pathId}`;
  return `https://res.cloudinary.com/${env.CLOUDINARY_CLOUD_NAME}/image/upload/${fullPathId}.webp`;
}
