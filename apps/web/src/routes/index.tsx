import { Button } from "@repo/ui/components/shadcn/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Button variant="outline">Click me</Button>;
}
