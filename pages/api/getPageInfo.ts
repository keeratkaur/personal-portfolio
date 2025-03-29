import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";
import { PageInfo } from "../../typings";

//only got first element so add 0 as an index
const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
    pageInfo: PageInfo | null;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const pageInfo: PageInfo = await sanityClient.fetch(query);
        if (!pageInfo) {
            throw new Error('No page info found');
        }
        res.status(200).json({ pageInfo });
    } catch (error) {
        console.error('Error fetching page info:', error);
        res.status(500).json({ pageInfo: null });
    }
}

