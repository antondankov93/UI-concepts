import { createLazyFileRoute } from "@tanstack/react-router";
import SaasPageV8 from "../../versions/v8/SaasPage";

export const Route = createLazyFileRoute("/v8/app")({
  component: SaasPageV8,
});
