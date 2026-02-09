import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV6 from "../../versions/v6/LandingPage";

export const Route = createLazyFileRoute("/v6/")({
  component: LandingPageV6,
});
