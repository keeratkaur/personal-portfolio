import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";
import { Project } from "../../typings";

// Expanded array of technologies
const query = groq`
    *[_type == "project"] {
        ..., 
        technologies[]-> {
            ...,
            image {
                asset->
            }
        }
    }
`;

type Data = {
    projects: Project[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const projects: Project[] = await sanityClient.fetch(query);
        res.status(200).json({ projects });
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ projects: [] });
    }
}   


