import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "albums"]{
    slug,
  }`
;

export const fetchSlugs = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};
