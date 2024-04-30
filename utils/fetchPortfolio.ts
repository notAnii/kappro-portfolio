import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "portfolio"][0]`;

export const fetchPortfolio = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};