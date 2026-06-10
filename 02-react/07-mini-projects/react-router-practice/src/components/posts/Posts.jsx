import { useNavigate, useSearchParams } from "react-router-dom";
import posts from "../../data/postData";

function Posts() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  return (
    <>
      <input
        onChange={(e) => {
          setSearchParams({ search: e.target.value });
        }}
        type="text"
        name=""
        id=""
        placeholder="Search Blog"
      />
      {posts
        .filter((post) => post.title.includes(query))
        .map((post) => {
          return (
            <div
              key={post.id}
              style={{ display: "flex", justifyContent: "center", gap: 12 }}
            >
              <h3>{post.title}</h3>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/posts/${post.id}`);
                }}
              >
                Read More
              </button>
            </div>
          );
        })}
    </>
  );
}

export default Posts;
