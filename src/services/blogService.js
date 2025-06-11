const API_URL = "http://localhost:4000/blogs";

export const fetchBlogs = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const fetchBlogById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const createBlog = async (blogData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  return res.json();
};

export const updateBlog = async (id, blogData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogData),
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
