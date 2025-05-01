"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { signUp, signIn } from "@/server/users";
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";
import { AuthError, AuthFormData } from "@/lib/types";

export function AuthForm() {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const validateForm = (): boolean => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSignIn = async (): Promise<void> => {
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await signIn(formData.email, formData.password);
      if (response.success) {
        router.push("/dashboard");
      } else {
        setError(response.error || "An error occurred during sign in");
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError?.message || "An error occurred during sign in");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (): Promise<void> => {
    if (!validateForm()) return;
    try {
      setLoading(true);
      const response = await signUp(formData.email, formData.password);
      if (response.success) {
        router.push("/dashboard");
      } else {
        setError(response.error || "An error occurred during sign up");
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError?.message || "An error occurred during sign up");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (): void => {
    setError("");
    setFormData({ email: "", password: "" });
  };

  return (
    <Tabs defaultValue="SignIn" onValueChange={handleTabChange} className="w-[600px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className="cursor-pointer" value="SignIn">Sign In</TabsTrigger>
        <TabsTrigger className="cursor-pointer" value="SignUp">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="SignIn">
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Please enter your email and password to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            {error && <p className="text-red-500 p-2 rounded-md bg-red-100">{error}</p>}
            <Button className="cursor-pointer w-1/2" onClick={handleSignIn} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="SignUp">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Please enter your email and password to sign up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            {error && <p className="text-red-500 p-2 rounded-md bg-red-100">{error}</p>}
            <Button className="cursor-pointer w-1/2" onClick={handleSignUp} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 