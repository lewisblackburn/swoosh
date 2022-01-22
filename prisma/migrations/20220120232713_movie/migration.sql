/*
  Warnings:

  - You are about to drop the column `revenue` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "revenue",
DROP COLUMN "status",
DROP COLUMN "thumbnail",
ADD COLUMN     "backdrop" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/1200x600',
ADD COLUMN     "poster" TEXT NOT NULL DEFAULT E'https://via.placeholder.com/400x600';
