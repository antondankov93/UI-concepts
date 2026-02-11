import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV12 from "../../versions/v12/LandingPage";

export const Route = createLazyFileRoute("/v12/")({
  component: LandingPageV12,
});
