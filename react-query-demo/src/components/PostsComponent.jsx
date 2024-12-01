import React from 'react'
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    return res.json();
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, } = useQuery(
        'posts',
        fetchPosts,

         {
            cacheTime: 10 * 60 * 1000,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: true,
            keepPreviousData: true,
          }

    );
  console.log (data);

  
if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error loading data</div>;
if (isError) return <div>Error: {error.message}</div>;

 return(
    <div>
        <h1>Posts Components</h1>
        <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
   );
}

export default PostsComponent;