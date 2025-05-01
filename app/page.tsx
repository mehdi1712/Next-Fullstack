import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AuthForm } from "@/components/auth-form";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex flex-col gap-3 items-center justify-center p-10">
      <AuthForm />
    </main>
  );
}
