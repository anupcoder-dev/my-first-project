import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../features/blogs/blogSlice";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function BlogNew() {
  const [form, setForm] = useState({ title: "", excerpt: "", content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      createBlog({
        ...form,
        date: new Date().toISOString().split("T")[0],
        authorId: 1,
      })
    );
    navigate("/blogs");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full border p-2"
          required
        />
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Short excerpt"
          className="w-full border p-2"
          required
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your blog content using markdown..."
          className="w-full border p-2"
          rows={10}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
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