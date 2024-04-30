import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "about"][0]`
;

export const fetchAbout = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};