import Link from "next/link";
import getBlogs from "./utils/getBlogs";

export default async function Home() {
  const data = await getBlogs();
  const blogs = data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  return (
    <section className="secscreen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 gap-16">
        {blogs.map((blog) => {
          return (
            <Link href={`/${blog.slug.current}`} key={blog._id}>
              <div className="flex flex-col gap-4 p-4 w-64 h-52 bg-[#09090A] rounded card">
                <h1 className="text-xl">{blog.title}</h1>
                <p>{blog.shortDescription}</p>
                <div className="flex justify-between">
                  <span>{blog.publishedAt}</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24 24 0 0 1 24 24a8 8 0 0 0 16 0a24 24 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24 24 0 0 1 24 24v112a39.81 39.81 0 0 0-24-8Zm128 0h-64a39.81 39.81 0 0 0-24 8V88a24 24 0 0 1 24-24h64ZM160 88h40a8 8 0 0 1 0 16h-40a8 8 0 0 1 0-16Zm48 40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0 32a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
