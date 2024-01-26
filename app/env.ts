export const isClient = typeof window !== "undefined";

const globalEnv = isClient ? window.ENV : process.env;

export const env = {
  CLOUDINARY_CLOUD_NAME: globalEnv.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_FOLDER_NAME: globalEnv.CLOUDINARY_FOLDER_NAME,
};
