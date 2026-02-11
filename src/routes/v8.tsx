import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/v8")({ component: () => <Outlet /> });
