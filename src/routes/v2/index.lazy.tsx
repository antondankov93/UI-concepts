import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV2 from "../../versions/v2/LandingPage";

export const Route = createLazyFileRoute("/v2/")({
  component: LandingPageV2,
});
