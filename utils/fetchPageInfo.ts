import { PageInfo } from "@/typings";
import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";

export const fetchPageInfo = async () => {
    const query = groq`
        *[_type == "pageInfo"][0]
    `;
    
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return pageInfo;
}
