import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/Home/About";
import Todos from "./components/Todos";
import First from "./components/All/T/P";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Todos />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/todos" element={<First />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
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
}

export default App;
