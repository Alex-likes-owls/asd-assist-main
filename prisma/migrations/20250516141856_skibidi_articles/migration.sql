-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "article" TEXT NOT NULL,
    "lan" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
