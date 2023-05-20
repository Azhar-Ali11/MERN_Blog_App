import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  if (!Array.isArray(posts)) {
    // Handle the case when `posts` is not an array
    return <div>No posts to display</div>;
  }

  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key={p.id} /> // Don't forget to add a unique key prop
      ))}
    </div>
  );
}