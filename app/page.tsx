import { redirect } from "next/navigation";
// refactored
export default function Home() {
  redirect("/dashboard");
  return null;
}
