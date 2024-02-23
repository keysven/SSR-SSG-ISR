import Link from "next/link";
interface TBlog {
  id: string;
  title: string;
  content: string;
}

const getBlogData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 120}});
  const blogData = await res.json();
  return blogData;
};

//export const dynamicParams = false


const BlogPage = async () => {
  const blogData = await getBlogData();

  return (
    <div className="container mx-auto py-[50px]">
      <div className="grid grid-cols-12 gap-3">
        {blogData.map((blog: TBlog) => (
          // eslint-disable-next-line react/jsx-key
          <div className="col-span-3 border border-black rounded p-5">
            <Link href={`/blog/${blog.id}`} className="w-full">
                <h2>{blog.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
