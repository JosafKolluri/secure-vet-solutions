import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/non-it-staffing")({
  beforeLoad: () => {
    throw redirect({ to: "/non-it-services" });
  },
});
