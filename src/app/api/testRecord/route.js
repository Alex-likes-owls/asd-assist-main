import { auth } from "../../../../auth";
import prisma from "../../../../lib/prisma";

export async function GET(req) {
  const session = await auth();
  if (session && session.user) {
    let email = session.user.email;
    const records = await prisma.record.findMany({
      where: {
        user: {
          email: email,
        },
      },
    });
    const data = records.map((v) => {
      return {
        score: v.score,
        testName: v.testName,
        ts: v.ts.toString(),
      };
    });
    return Response.json({
      data: data,
    });
  }
  return Response.json("Not authenticated", {
    status: 401,
  });
}

export async function POST(req) {
  try {
    const session = await auth();
    if (session && session.user) {
      const email = session.user.email;
      let user = await prisma.user.findFirst({
        where: { email: email },
      });
      if (!user) {
        user = await prisma.user.create({
          data: {
            email: email,
          },
        });
      }
      const reqBody = await req.json();
      await prisma.record.create({
        data: {
          score: reqBody.score,
          testName: reqBody.testName,
          ts: reqBody.ts,
          userId: user.id,
        },
      });
      return Response.json("Success");
    }
    return Response.json("Not authenticated", {
      status: 401,
    });
  } catch (e) {
    console.log(e);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
