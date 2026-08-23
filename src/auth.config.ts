import type { NextAuthConfig } from "next-auth";

const authenticatedRoutes = ["/profile", "/test"];
const adminRoutes = ["/admin"];

export const authConfig = {
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as any;
      }
      return session;
    },
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = auth?.user?.role === "ADMIN";
      const { pathname } = request.nextUrl;

      const needsAuth = authenticatedRoutes.some((route) =>
        pathname.startsWith(route),
      );
      const needsAdmin = adminRoutes.some((route) =>
        pathname.startsWith(route),
      );

      if ((needsAuth || needsAdmin) && !isLoggedIn) return false;
      if (needsAdmin && !isAdmin) return false;

      return true;
    },
  },
} satisfies NextAuthConfig;
