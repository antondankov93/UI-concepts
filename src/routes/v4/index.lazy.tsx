import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV4 from "../../versions/v4/LandingPage";

export const Route = createLazyFileRoute("/v4/")({
  component: LandingPageV4,
});
