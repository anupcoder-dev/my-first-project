import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../features/blogs/blogSlice";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogEdit() {
  const { id } = useParams();
  const blog = useSelector((state) =>
    state.blogs.items.find((b) => b.id === parseInt(id))
  );
  const [form, setForm] = useState(blog || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) setForm(blog);
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateBlog(form));
    navigate("/blogs");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title || ""}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Blog Title"
          required
        />
        <textarea
          name="excerpt"
          value={form.excerpt || ""}
          onChange={handleChange}
          className="w-full border p-2"
          placeholder="Excerpt"
          required
        />
        <textarea
          name="content"
          value={form.content || ""}
          onChange={handleChange}
          className="w-full border p-2"
          rows={10}
          placeholder="Write blog content in markdown"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">📄 Live Preview</h3>
        <div className="prose border p-4 bg-gray-50 dark:bg-gray-800 rounded">
          <ReactMarkdown>{form.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}