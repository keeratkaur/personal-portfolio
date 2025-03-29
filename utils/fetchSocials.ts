import { Social } from "@/typings";
import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

export const fetchSocials = async () => {
    const query = groq`
        *[_type == "social"]
    `;
    
    const socials: Social[] = await sanityClient.fetch(query);
    return socials;
}
