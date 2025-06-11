import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, deleteBlog } from "../features/blogs/blogSlice";
import { Link } from "react-router-dom";

export default function Blogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);

  useEffect(() => { dispatch(fetchBlogs()); }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id} className="border-b py-2">
          <Link to={`/blogs/${blog.id}/edit`} className="text-blue-600 font-bold">{blog.title}</Link>
          <p>{blog.excerpt}</p>
          <button onClick={() => dispatch(deleteBlog(blog.id))} className="text-red-600">Delete</button>
        </div>
      ))}
    </div>
  );
}
