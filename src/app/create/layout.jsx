import { Suspense } from "react";

export default function CreateLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
