import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Photos from "./components/Photos";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <nav className="headernav">
            <ul>
              <li>
                <Link to="/todos">TODOS</Link>
              </li>
              <li>
                <Link to="/posts">POSTS</Link>
              </li>
              <li>
                <Link to="/users">USERS</Link>
              </li>
              <li>
                <Link to="/photos">PHOTOS</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
/* const [data, setData] = useState(null);

  const [navbar, setNavbar] = useState("Todos");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/` + navbar)
      .then((response) => response.json())
      .then((result) => setData(result.slice(0, 20)));
  }, [navbar]);

  return (
    <>
      <Header />
      <main>
        <div className="container section-container">
          <div>
            <ul
              className="list"
              value={navbar}
              onClick={(e) => {
                setNavbar(e.target.value);
              }}
            >
              <li value="todos">Todos</li>
              <li value="posts">Posts</li>
              <li value="comments">Comments</li>
            </ul>
          </div>
          <h2 className="theme">{navbar}</h2>
          <ul className="todoslist">
            {data ? (
              data.map((item) => {
                return (
                  <li key={item.id} className="todos-item">
                    {item?.title ?? item?.name ?? item?.body}
                  </li>
                );
              })
            ) : (
              <li>No data</li>
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );*/
