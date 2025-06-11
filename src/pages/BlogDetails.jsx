import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Markdown from 'react-markdown';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector(state => state.blogs.blogs.find(b => b.id === parseInt(id)));

  if (!blog) return <div>Blog not found.</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <div className="prose">
        <Markdown>{blog.content}</Markdown>
      </div>
    </div>
  );
};

export default BlogDetails;