import { Suspense } from "react";

export default function ArticleTestLayout({ children }) {
  return <Suspense>{children}</Suspense>;
}
