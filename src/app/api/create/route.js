import prisma from "../../../../lib/prisma";

export async function POST(req) {
  console.log("POST /api/create hit");
  // try {
  //   const reqBody = await req.json();
  //   await prisma.test.create({
  //     data: reqBody,
  //     include: { questions: { include: { choices: true } } },
  //   });
  //   return Response.json("Success");
  // } catch (e) {
  //   console.log(e);
  //   return Response.json("Something went wrong", {
  //     status: 500,
  //   });
  // }
  // // console.log(reqBody);

  // // return Response.json("BALLSACK");
  // await prisma.test.create({
  //   data:
  // })
  try {
    const { mn, eng } = await req.json();
    console.log("Received mn:", JSON.stringify(mn, null, 2));
    console.log("Received eng:", JSON.stringify(eng, null, 2));
    await prisma.$transaction(
      [
        prisma.test.create({
          data: mn,
          include: { questions: { include: { choices: true } } },
        }),
        prisma.test.create({
          data: eng,
          include: { questions: { include: { choices: true } } },
        }),
      ],
      {
        timeout: 20000,
        maxWait: 10000,
      },
    );
    return Response.json("Success");
  } catch (e) {
    // console.log(e);
    console.log(e.message ?? e);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
export async function GET(req) {
  console.log("GET /api/create hit");
  try {
    const tests = await prisma.test.findMany({
      include: { questions: { include: { choices: true } } },
    });
    const mn = tests.filter((t) => t.lan === "mn");
    const en = tests.filter((t) => t.lan === "en");
    return Response.json({ en, mn });
  } catch (e) {
    console.log(e.message ?? e);
    return Response.json("Something went wrong", {
      status: 500,
    });
  }
}
