import { createFileRoute } from "@tanstack/react-router";

function RouteComponent() {
  return <div>Signup</div>;
}

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});
