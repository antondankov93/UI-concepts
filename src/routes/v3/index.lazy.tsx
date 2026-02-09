import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV3 from "../../versions/v3/LandingPage";

export const Route = createLazyFileRoute("/v3/")({
  component: LandingPageV3,
});
