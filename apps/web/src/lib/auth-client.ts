import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const signInWithGoogle = () => {
  return authClient.signIn.social({
    provider: "google",
  });
};

export const signInWithGoogleIdToken = (idToken: string, accessToken: string) => {
  return authClient.signIn.social({
    provider: "google",
    idToken: {
      token: idToken,
      accessToken: accessToken,
    },
  });
};
