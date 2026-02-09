import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV5 from "../../versions/v5/SaasPage";

export const Route = createLazyFileRoute("/v5/app")({
  component: SaasPageV5,
});
