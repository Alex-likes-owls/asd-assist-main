import { auth } from "../../../../auth";
import prisma from "../../../../lib/prisma";

export async function GET(req, res) {
  const session = await auth();
  if (session && session.user) {
    let email = session.user.email;
    const user = prisma.user.findFirst({
      where: { email: email },
    });
  }
}
