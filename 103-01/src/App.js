import "./App.css";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* <a href="#">anchor: About</a> | { ' '}
        <Link to="/about">link: About</Link> */}

      {/* put the navbar here above Routes */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route path="" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

function NavBar() {
  return (
    <nav style={{ padding: 20 }}>
      <Link to="/" style={{ margin: 10 }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: 10 }}>
        About
      </Link>
      <Link to="/posts" style={{ margin: 10 }}>
        Blog
      </Link>
    </nav>
  );
}

const BlogPosts = {
  1: {
    title: "Fist Blog Post",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi possimus quaerat dolo",
  },
  2: {
    title: "Second Blog Post",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi possimus quaerat dolo",
  },
};

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => {
        return (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;

  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
