import { Project } from "@/typings";
import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

export const fetchProjects = async () => {
    const query = groq`
        *[_type == "project"]
    `;
    
    const projects: Project[] = await sanityClient.fetch(query);
    return projects;
}
