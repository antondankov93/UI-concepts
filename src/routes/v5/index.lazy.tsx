import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV5 from "../../versions/v5/LandingPage";

export const Route = createLazyFileRoute("/v5/")({
  component: LandingPageV5,
});
