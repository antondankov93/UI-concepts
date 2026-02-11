import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV8 from "../../versions/v8/LandingPage";

export const Route = createLazyFileRoute("/v8/")({
  component: LandingPageV8,
});
