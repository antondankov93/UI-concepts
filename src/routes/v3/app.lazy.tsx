import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV3 from "../../versions/v3/SaasPage";

export const Route = createLazyFileRoute("/v3/app")({
  component: SaasPageV3,
});
