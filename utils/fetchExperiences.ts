import { Experience } from "@/typings";
import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

export const fetchExperiences = async () => {
    const query = groq`
        *[_type == "experience"] | order(dateStarted desc)
    `;
    
    const experiences: Experience[] = await sanityClient.fetch(query);
    return experiences;
}
