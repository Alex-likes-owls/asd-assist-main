/*
  Warnings:

  - You are about to drop the column `desc` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Test` table. All the data in the column will be lost.
  - Added the required column `description` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;
