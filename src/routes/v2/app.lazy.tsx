import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV2 from "../../versions/v2/SaasPage";

export const Route = createLazyFileRoute("/v2/app")({
  component: SaasPageV2,
});
