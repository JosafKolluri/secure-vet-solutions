import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/healthcare-staffing")({
  beforeLoad: () => {
    throw redirect({ to: "/healthcare-services" });
  },
});
