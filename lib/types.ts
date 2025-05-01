import { User } from "better-auth";

export interface AuthError {
  message: string;
}

export interface SignInResponse {
  success: boolean;
  error?: string;
}

export interface SignUpResponse {
  success: boolean;
  error?: string;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface SessionUser extends User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
}

export interface AuthConfig {
  headers: Headers;
} 