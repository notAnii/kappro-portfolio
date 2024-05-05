import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const albumsQuery = groq`*[_type == "albums"]{
    _id,
    albumName,
    slug,
    coverImage
  }`
;

const albumsImagesQuery = (slug: string) => groq`*[_type == "albums" && slug.current == "${slug}"]{
  _id,
  albumName,
  slug,
  images
}[0]`;

export const fetchAlbums = async () => {
    const data = await sanityClient.fetch(albumsQuery);
    return data;
};

export const fetchAlbumsWithImages = async (slug: string) => {
  const data = await sanityClient.fetch(albumsImagesQuery(slug));
  return data;
};
