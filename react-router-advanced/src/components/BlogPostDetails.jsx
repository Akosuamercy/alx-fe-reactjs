import React from 'react'
import { useParams } from 'react-router-dom';

function BlogPostDetails() {
  const { id } = useParams(); // Extracting the dynamic id from the URL

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the blog post with ID: {id}</p>
      {/* You can fetch the post data from an API based on the ID here */}
    </div>
  );
}

export default BlogPostDetails;