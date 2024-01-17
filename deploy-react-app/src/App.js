import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/root_page";
import HomePage from "./pages/home_page";
// import BlogPage, { loader as postlist } from "./pages/blog_page";
// import PostPage, { loader as postDetail } from "./pages/post_page";

const BlogPage = lazy(() => import("./pages/blog_page"));
const PostPage = lazy(() => import("./pages/post_page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            // loader: postlist,
            loader: () =>
              import("./pages/blog_page").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            // loader: postDetail,
            loader: (meta) =>
              import("./pages/blog_page").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
