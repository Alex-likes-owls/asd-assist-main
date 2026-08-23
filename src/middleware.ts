// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import { auth } from "../auth";
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth: middleware } = NextAuth(authConfig);
export const config = {
  matcher: ["/profile/:path*", "/test/:path*", "/admin/:path*"],
};
// const protectedRoutes = ["/profile", "/test", "/admin"];

// export default async function middleware(request: NextRequest) {
//   const session = await auth();
//   const { pathname } = request.nextUrl;
//   const isProtected = protectedRoutes.some((route) =>
//     pathname.startsWith(route),
//   );

//   if (isProtected && !session) {
//     return NextResponse.redirect(new URL("/api/auth/signin", request.url));
//   }
//   if (isProtected && session.user.role != "ADMIN") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }
