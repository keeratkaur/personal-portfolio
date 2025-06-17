import { Skill } from "@/typings";
import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

export const fetchSkills = async () => {
    const query = groq`
        *[_type == "skill"]
    `;
    
    const skills: Skill[] = await sanityClient.fetch(query);
    return skills;
}
