import { useParams } from "react-router-dom";
import posts from "../../data/postData";

function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));

  return (
    <>
      <h3>{!post ? "Post not found" : post.title}</h3>
    </>
  );
}

export default Post;
