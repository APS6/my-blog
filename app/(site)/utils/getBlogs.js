import { client } from "@/sanity/lib/client";
export const dynamic = 'force-dynamic'
export default async function getBlogs() {
    const query = '*[_type == "post"]';
    const data = await client.fetch(query, { cache: 'no-store' });
    if (!data) {
      throw new Error("Failed to fetch data");
    }
  
    return data;
  }