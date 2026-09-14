import withAuth from "next-auth/middleware";
import type { NextRequest } from "next/server";

export default function proxy(req: NextRequest) {
  // @ts-expect-error - next-auth v4's withAuth default export is itself a middleware function
  return withAuth(req);
}

export const config = {
  matcher: ["/issues/new", "/issues/edit/:id+"],
};