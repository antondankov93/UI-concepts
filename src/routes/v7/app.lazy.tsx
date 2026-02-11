import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV7 from "../../versions/v7/SaasPage";

export const Route = createLazyFileRoute("/v7/app")({
  component: SaasPageV7,
});
