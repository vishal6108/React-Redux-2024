import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home_page";
import ProductPage from "./pages/product_page";
import RootPage from "./pages/root_page";
import ErrorPage from "./pages/error_page";
import ProductDetailPage from "./pages/product_detail_page";
function App() {
  // 1st Approch
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <ProductPage /> },
        { path: "/products/:productId", element: <ProductDetailPage /> },
      ],
    },
  ]);

  // 2nd Approch
  // const routerDefine = createRoutesFromElements(
  //   <Route>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/products" element={<ProductPage />} />
  //   </Route>
  // );

  // const router = createBrowserRouter(routerDefine);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
