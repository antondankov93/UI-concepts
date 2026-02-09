import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV1 from "../../versions/v1/LandingPage";

export const Route = createLazyFileRoute("/v1/")({
  component: LandingPageV1,
});
