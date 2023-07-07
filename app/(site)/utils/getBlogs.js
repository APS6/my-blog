import { client } from "@/sanity/lib/client";

export default async function getBlogs() {
    const query = '*[_type == "post"]';
    const data = await client.fetch(query, {
      next: {revalidate: 10 }
    });
  
    if (!data) {
      throw new Error("Failed to fetch data");
    }
  
    return data;
  }