import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/v7")({ component: () => <Outlet /> });
