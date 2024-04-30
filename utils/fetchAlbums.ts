import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "albums"]{
    _id,
    albumName,
    slug,
    coverImage
  }`
;

export const fetchAlbums = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};