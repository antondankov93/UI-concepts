import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV12 from "../../versions/v12/SaasPage";

export const Route = createLazyFileRoute("/v12/app")({
  component: SaasPageV12,
});
