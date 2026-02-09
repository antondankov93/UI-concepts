import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV6 from "../../versions/v6/SaasPage";

export const Route = createLazyFileRoute("/v6/app")({
  component: SaasPageV6,
});
