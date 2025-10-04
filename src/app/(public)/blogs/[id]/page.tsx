import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const {id} = await params
  const blog = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`).then((res) => res.json());

  if (!blog) {
    return {
      title: "Blog Not Found | Yeasin Arafat",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: `${blog.title} | Yeasin Arafat`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: blog.image,
    },
  };
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blog = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/${id}`, { next: { revalidate: 10 } }).then((res) => res.json());

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto p-6 flex items-center justify-center flex-col mt-20">
        <h1 className="text-2xl font-bold">Blog Not Found</h1>
        <p className="mt-2 text-gray-600">Sorry, we couldn’t find the blog you’re looking for.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-6 flex items-center justify-center flex-col mt-20">
      <img src={blog.image} alt="blog image" />
      <h1 className="text-4xl font-bold mt-10 mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.excerpt}</p>
      <div className="prose prose-lg max-w-none">
        {blog?.content?.split("\n\n").map((para: string, idx: number) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </article>
  );
}
