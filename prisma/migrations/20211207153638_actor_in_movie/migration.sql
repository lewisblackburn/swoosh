/*
  Warnings:

  - You are about to drop the `_MovieToPerson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MovieToPerson" DROP CONSTRAINT "_MovieToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_MovieToPerson" DROP CONSTRAINT "_MovieToPerson_B_fkey";

-- DropTable
DROP TABLE "_MovieToPerson";

-- CreateTable
CREATE TABLE "ActorInMovie" (
    "movieId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ActorInMovie_pkey" PRIMARY KEY ("personId","movieId")
);

-- AddForeignKey
ALTER TABLE "ActorInMovie" ADD CONSTRAINT "ActorInMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActorInMovie" ADD CONSTRAINT "ActorInMovie_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
