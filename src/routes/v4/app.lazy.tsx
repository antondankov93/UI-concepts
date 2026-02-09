import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV4 from "../../versions/v4/SaasPage";

export const Route = createLazyFileRoute("/v4/app")({
  component: SaasPageV4,
});
