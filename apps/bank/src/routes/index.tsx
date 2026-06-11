import { createFileRoute, redirect } from "@tanstack/react-router";

function RouteComponent() {
  return <div>Hello</div>;
}

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const isAuthenticated = Boolean(localStorage.getItem("authenticated"));
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          // Save current location for redirect after login
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});
