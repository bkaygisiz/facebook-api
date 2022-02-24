/*
  Warnings:

  - You are about to alter the column `userId` on the `Estimate` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `userId` on the `Invoice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Estimate` DROP FOREIGN KEY `Estimate_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Invoice` DROP FOREIGN KEY `Invoice_userId_fkey`;

-- AlterTable
ALTER TABLE `Estimate` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Invoice` MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estimate` ADD CONSTRAINT `Estimate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
