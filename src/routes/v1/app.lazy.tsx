import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV1 from "../../versions/v1/SaasPage";

export const Route = createLazyFileRoute("/v1/app")({
  component: SaasPageV1,
});
