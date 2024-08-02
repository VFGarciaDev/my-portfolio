import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects"
}

export default function Home() {
  return (
    <>
      <ThemeToggle />
    </>
  );
}