-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('expense', 'income');

-- CreateTable
CREATE TABLE "public"."Transaction" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "tags" TEXT[],
    "type" "public"."TransactionType" NOT NULL, 

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
