'use server';

import { cookies } from 'next/headers';

export type AuthResponse = {
  success: boolean;
  error?: string;
  redirectTo?: string;
};

export async function login(formData: FormData): Promise<AuthResponse> {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return {
      success: false,
      error: 'Email and password are required'
    };
  }

  try {
    // TODO: Add your actual authentication logic here
    // This is just a placeholder implementation
    if (email === 'test@example.com' && password === 'password') {
      (await cookies()).set('session', 'dummy-session-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });

      return {
        success: true,
        redirectTo: '/dashboard'
      };
    }

    return {
      success: false,
      error: 'Invalid credentials'
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An error occurred during login'
    };
  }
}

export async function signup(formData: FormData): Promise<AuthResponse> {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return {
      success: false,
      error: 'Email and password are required'
    };
  }

  try {
    // TODO: Add your actual user registration logic here
    // This is just a placeholder implementation
    (await
      // TODO: Add your actual user registration logic here
      // This is just a placeholder implementation
      cookies()).set('session', 'dummy-session-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });

    return {
      success: true,
      redirectTo: '/dashboard'
    };
  } catch (error) {
    console.error('Signup error:', error);
    return {
      success: false,
      error: 'An error occurred during signup'
    };
  }
}