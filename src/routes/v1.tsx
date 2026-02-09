import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/v1")({ component: () => <Outlet /> });
