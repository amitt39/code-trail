import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Layout from "./components/layout/layout";
import Login from "./components/login/login";
import NotFound from "./components/notFound/NotFound";
import Post from "./components/posts/Post";
import Posts from "./components/posts/Posts";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="posts"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route
            path="posts/:id"
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
