'use client'
import { Button } from "@/components/ui/button";
import { signOut } from "@/server/users";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  async function handleSignOut() {
    try {
      setLoading(true);
      await signOut();
      router.push("/dashboard");

    } catch (error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
  <div className="flex flex-col items-center justify-center h-screen">
    
    
    Welcome  to the Dashboard
    
     <Button variant="destructive" className="mt-4 cursor-pointer" disabled={loading} onClick={handleSignOut}>Sign Out</Button>

    </div>);
}
