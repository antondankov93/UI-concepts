import { createLazyFileRoute } from "@tanstack/react-router";
import LandingPageV7 from "../../versions/v7/LandingPage";

export const Route = createLazyFileRoute("/v7/")({
  component: LandingPageV7,
});
