PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE IF NOT EXISTS "PostCategory" (
    "post_slug" TEXT NOT NULL,
    "category_slug" TEXT NOT NULL,

    PRIMARY KEY ("post_slug", "category_slug"),
    CONSTRAINT "PostCategory_post_slug_fkey" FOREIGN KEY ("post_slug") REFERENCES "Post" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostCategory_category_slug_fkey" FOREIGN KEY ("category_slug") REFERENCES "Category" ("slug") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "PostCategory" VALUES('career-planning-in-the-age-of-ai','technology');
INSERT INTO "PostCategory" VALUES('career-planning-in-the-age-of-ai','career');
INSERT INTO "PostCategory" VALUES('career-planning-in-the-age-of-ai','ai');
INSERT INTO "PostCategory" VALUES('from-chalk-lines-to-command-lines','technology');
INSERT INTO "PostCategory" VALUES('from-chalk-lines-to-command-lines','career');
INSERT INTO "PostCategory" VALUES('from-chalk-lines-to-command-lines','ai');
INSERT INTO "PostCategory" VALUES('integrating-gcp-secret-manager-with-nestjs-config','technology');
INSERT INTO "PostCategory" VALUES('the-work-is-mysterious-and-important','technology');
INSERT INTO "PostCategory" VALUES('the-work-is-mysterious-and-important','career');
INSERT INTO "PostCategory" VALUES('the-work-is-mysterious-and-important','ai');
INSERT INTO "PostCategory" VALUES('pubsub-pull-subscriptions-on-google-cloud-run-with-nestjs','technology');
INSERT INTO "PostCategory" VALUES('scaling-up-and-down-memory-intensive-mage-ai-workloads-with-kubernetes-at-gcp','technology');
INSERT INTO "PostCategory" VALUES('how-to-interview-senior-software-engineers','technology');
INSERT INTO "PostCategory" VALUES('how-to-interview-senior-software-engineers','career');
INSERT INTO "PostCategory" VALUES('vibe-coding','ai');
INSERT INTO "PostCategory" VALUES('vibe-coding','technology');
INSERT INTO "PostCategory" VALUES('curse-of-creativity','technology');
INSERT INTO "PostCategory" VALUES('the-new-artisan','ai');
INSERT INTO "PostCategory" VALUES('the-new-artisan','career');
INSERT INTO "PostCategory" VALUES('the-new-artisan','technology');
INSERT INTO "PostCategory" VALUES('technical-debt','technology');
INSERT INTO "PostCategory" VALUES('servant-leadership','career');
INSERT INTO "PostCategory" VALUES('not-my-job','career');
INSERT INTO "PostCategory" VALUES('promotion-paradox','career');
INSERT INTO "PostCategory" VALUES('core-values','career');
INSERT INTO "PostCategory" VALUES('apocalyptic-incompetence','ai');
INSERT INTO "PostCategory" VALUES('apocalyptic-incompetence','career');
INSERT INTO "PostCategory" VALUES('know-your-audience','career');
INSERT INTO "PostCategory" VALUES('protagonist-syndrome','career');
INSERT INTO "PostCategory" VALUES('replaying-the-tutorial','career');
INSERT INTO "PostCategory" VALUES('the-new-renaissance','career');
INSERT INTO "PostCategory" VALUES('the-new-renaissance','ai');
INSERT INTO "PostCategory" VALUES('breaking-it-down','technology');
INSERT INTO "PostCategory" VALUES('breaking-it-down','career');
