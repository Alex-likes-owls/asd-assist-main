import { Suspense } from "react";

export default function BlogTestLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
