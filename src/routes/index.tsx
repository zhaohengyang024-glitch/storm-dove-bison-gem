import { createFileRoute } from "@tanstack/react-router";
import { GiftApp } from "@/components/gift/gift-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <GiftApp />;
}
