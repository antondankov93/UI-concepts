import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import Home from "./pages/Home";
import LandingPageV1 from "./versions/v1/LandingPage";
import SaasPageV1 from "./versions/v1/SaasPage";
import LandingPageV2 from "./versions/v2/LandingPage";
import SaasPageV2 from "./versions/v2/SaasPage";
import LandingPageV3 from "./versions/v3/LandingPage";
import SaasPageV3 from "./versions/v3/SaasPage";
import LandingPageV4 from "./versions/v4/LandingPage";
import SaasPageV4 from "./versions/v4/SaasPage";
import LandingPageV5 from "./versions/v5/LandingPage";
import SaasPageV5 from "./versions/v5/SaasPage";
import LandingPageV6 from "./versions/v6/LandingPage";
import SaasPageV6 from "./versions/v6/SaasPage";
import "./App.css";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

// Root Index (Home)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// V1 Routes
const v1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v1",
});

const v1LandingRoute = createRoute({
  getParentRoute: () => v1Route,
  path: "/",
  component: LandingPageV1,
});

const v1AppRoute = createRoute({
  getParentRoute: () => v1Route,
  path: "app",
  component: SaasPageV1,
});

// V2 Routes
const v2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v2",
});

const v2LandingRoute = createRoute({
  getParentRoute: () => v2Route,
  path: "/",
  component: LandingPageV2,
});

const v2AppRoute = createRoute({
  getParentRoute: () => v2Route,
  path: "app",
  component: SaasPageV2,
});

// V3 Routes
const v3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v3",
});

const v3LandingRoute = createRoute({
  getParentRoute: () => v3Route,
  path: "/",
  component: LandingPageV3,
});

const v3AppRoute = createRoute({
  getParentRoute: () => v3Route,
  path: "app",
  component: SaasPageV3,
});

// V4 Routes
const v4Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v4",
});

const v4LandingRoute = createRoute({
  getParentRoute: () => v4Route,
  path: "/",
  component: LandingPageV4,
});

const v4AppRoute = createRoute({
  getParentRoute: () => v4Route,
  path: "app",
  component: SaasPageV4,
});

// V5 Routes
const v5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v5",
});

const v5LandingRoute = createRoute({
  getParentRoute: () => v5Route,
  path: "/",
  component: LandingPageV5,
});

const v5AppRoute = createRoute({
  getParentRoute: () => v5Route,
  path: "app",
  component: SaasPageV5,
});

// V6 Routes
const v6Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "v6",
});

const v6LandingRoute = createRoute({
  getParentRoute: () => v6Route,
  path: "/",
  component: LandingPageV6,
});

const v6AppRoute = createRoute({
  getParentRoute: () => v6Route,
  path: "app",
  component: SaasPageV6,
});

// Build tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  v1Route.addChildren([v1LandingRoute, v1AppRoute]),
  v2Route.addChildren([v2LandingRoute, v2AppRoute]),
  v3Route.addChildren([v3LandingRoute, v3AppRoute]),
  v4Route.addChildren([v4LandingRoute, v4AppRoute]),
  v5Route.addChildren([v5LandingRoute, v5AppRoute]),
  v6Route.addChildren([v6LandingRoute, v6AppRoute]),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
