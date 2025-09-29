import React from "react";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // const blogs = await getBlogs();
  // const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return {
      title: "Blog Not Found | Yeasin Arafat",
      description: "The blog you are looking for does not exist."
    };
  }

  return {
    title: `${blog.title} | Yeasin Arafat`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: blog.image
    }
  };
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  //   const blogs = await getBlogs();
  //   const blog = blogs.find((b) => b.id.toString() === params.id);

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
      <img src={blog.image} alt="blog image"/>
      <h1 className="text-4xl font-bold mt-10 mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.excerpt}</p>
      <div className="prose prose-lg max-w-none">
        {blog.content.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </article>
  );
}

const blog = {
  id: 1,
  title: "Mastering React Hooks",
  image:
    "https://media.licdn.com/dms/image/v2/D5612AQEnL4bsGds2hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710164295789?e=2147483647&v=beta&t=AgKKilmSSbcd2v1mfZEHl3ugrsgGTssXHUKCp6seGQg",
  excerpt: "Hooks like useState, useEffect, and useContext make React development easier and more powerful. Learn how to leverage them in your projects.",
  content:
    "React Hooks have transformed the way developers build applications with React. Before hooks were introduced in React 16.8, developers had to rely on class components to manage state, lifecycle methods, and context. This often resulted in verbose code and complex patterns that were difficult to scale. With hooks, React introduced a more functional and modular way to manage state and side effects.\n\nThe most commonly used hook is useState, which allows you to manage component-level state without writing a class. For example, a counter component can be written in just a few lines using useState, making it easier to read and maintain. Another essential hook is useEffect, which lets you handle side effects such as data fetching, subscriptions, or manually updating the DOM. Instead of scattering lifecycle logic across multiple class methods like componentDidMount or componentWillUnmount, you can centralize related logic inside a single useEffect call.\n\nContext management also became simpler with the useContext hook. Instead of relying on higher-order components or complex render props, you can now consume context values directly inside functional components. This has improved the developer experience and made React codebases more predictable.\n\nBeyond these basics, React also provides advanced hooks like useReducer for state logic that requires multiple actions, and useMemo and useCallback for performance optimization. These hooks help prevent unnecessary re-renders and keep applications responsive, even when handling complex UI interactions.\n\nOne of the most powerful aspects of hooks is the ability to create custom hooks. A custom hook is essentially a reusable piece of stateful logic that you can share across multiple components. For example, you could create a useFetch hook that encapsulates data fetching logic, making your code more modular and reducing repetition.\n\nAs React applications scale, understanding how to combine these hooks effectively becomes essential. For instance, you might use useReducer for complex state management, useEffect for API calls, and custom hooks to abstract repeated patterns. This modularity improves maintainability and encourages clean separation of concerns.\n\nIn conclusion, React Hooks are more than just a syntactic improvement—they represent a shift towards functional programming and composability in React. By mastering hooks like useState, useEffect, and useContext, along with advanced patterns like custom hooks, you can write cleaner, more efficient, and more reusable code. As the React ecosystem continues to evolve, hooks remain at the core of modern frontend development, making them an indispensable tool for any developer.",
};
