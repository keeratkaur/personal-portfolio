import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`
    *[_type == "skill"] {
        _id,
        _type,
        title,
        progress,
        image
    }
`;

type Data = {
    skills: Skill[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const skills: Skill[] = await sanityClient.fetch(query);
        console.log('Skills from API:', skills);
        res.status(200).json({ skills });
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ skills: [] });
    }
}
