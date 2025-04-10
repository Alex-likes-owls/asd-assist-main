import { Suspense } from "react";

export default function TestLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
