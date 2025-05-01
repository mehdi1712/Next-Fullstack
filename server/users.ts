"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AuthFormData, SignInResponse, SignUpResponse, SessionUser } from "@/lib/types";

export const signIn = async (email: string, password: string): Promise<SignInResponse> => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        });
        return { success: true };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error.message : "An error occurred during sign in" 
        };
    }
}

export const signUp = async (email: string, password: string): Promise<SignUpResponse> => {
    try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name: ''
            }
        });
        return { success: true };
    } catch (error) {
        return { 
            success: false, 
            error: error instanceof Error ? error.message : "An error occurred during sign up" 
        };
    }
}

export const signOut = async (): Promise<void> => {
    await auth.api.signOut({
        headers: await headers()
    });
}

export const getUser = async (): Promise<SessionUser | null> => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    return session?.user as SessionUser | null;
}