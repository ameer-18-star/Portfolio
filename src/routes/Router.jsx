import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Main = lazy(() => import("../layouts/Main"));
const Home = lazy(() => import("../pages/Home"));
const AllProjectsPage = lazy(() => import("../pages/AllProjectsPage"));
const AllBlogsPage = lazy(() => import("../pages/AllBlogsPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const InstructorPage = lazy(() => import("../pages/InstructorPage"));
const PentesterPage = lazy(() => import("../pages/PentesterPage"));

const repoName = import.meta.env.VITE_REPO_NAME || "";
const page = (el) => <Suspense fallback={<Loading />}>{el}</Suspense>;

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: page(<Main />),
      children: [
        { index: true, element: page(<Home />) },
        { path: "projects", element: page(<AllProjectsPage />) },
        { path: "blog", element: page(<AllBlogsPage />) },
        { path: "instructor", element: page(<InstructorPage />) },
        { path: "pentester", element: page(<PentesterPage />) },
        // Anything else (bad links, removed pages) gets the themed 404.
        { path: "*", element: page(<NotFound />) },
      ],
    },
  ],
  { basename: repoName ? `/${repoName}` : "/" }
);
