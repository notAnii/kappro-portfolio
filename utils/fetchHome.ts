import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "home"][0]`
;

export const fetchHome = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};