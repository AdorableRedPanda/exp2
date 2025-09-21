ALTER TABLE "Transaction"
    ADD COLUMN "month" DATE GENERATED ALWAYS AS (date_trunc('month', "date")::date) STORED;