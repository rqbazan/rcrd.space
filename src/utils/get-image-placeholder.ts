import { getPixels } from "@unpic/pixels";
import { blurhashToDataUri } from "@unpic/placeholder";
import { encode } from "blurhash";
import { transformImageUrl } from "./get-image-url";

/**
 * @param src {string} - Cloudinary Image URL
 * @returns {Promise<string>} - Blurhash Data URI
 */
export async function getImagePlaceholder(src: string): Promise<string> {
  const supportedSrc = transformImageUrl(src, {
    format: "jpg",
    transform: "w_20,h_15",
  });

  const jpgData = await getPixels(supportedSrc);
  const data = Uint8ClampedArray.from(jpgData.data);
  const blurhash = encode(data, jpgData.width, jpgData.height, 4, 4);

  return blurhashToDataUri(blurhash);
}
