import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`*[_type == "videos"][0]`;

export const fetchVideos = async () => {
    const data = await sanityClient.fetch(query);
    return data;
};