PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE d1_migrations(
		id         INTEGER PRIMARY KEY AUTOINCREMENT,
		name       TEXT UNIQUE,
		applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
INSERT INTO "d1_migrations" VALUES(1,'0001_init_schema.sql','2025-06-29 17:22:31');
INSERT INTO "d1_migrations" VALUES(2,'0002_init_posts.sql','2025-06-29 17:22:31');
INSERT INTO "d1_migrations" VALUES(3,'0003_no_comment_threads.sql','2025-07-01 01:56:50');
INSERT INTO "d1_migrations" VALUES(4,'0004_user_account_types.sql','2025-07-01 21:10:25');
INSERT INTO "d1_migrations" VALUES(5,'0005_no_unique_emails.sql','2025-07-01 22:40:34');
INSERT INTO "d1_migrations" VALUES(6,'0006_post-vibe-coding.sql','2025-07-03 06:55:54');
INSERT INTO "d1_migrations" VALUES(7,'0007_post_preview_image.sql','2025-07-04 18:29:21');
INSERT INTO "d1_migrations" VALUES(8,'0007_remove_is_published.sql','2025-07-05 01:30:18');
INSERT INTO "d1_migrations" VALUES(9,'0008_features.sql','2025-08-07 02:36:52');
INSERT INTO "d1_migrations" VALUES(10,'0009_subheads.sql','2025-08-08 01:26:32');
INSERT INTO "d1_migrations" VALUES(11,'0010_video_preview.sql','2025-08-08 20:58:45');
INSERT INTO "d1_migrations" VALUES(12,'0011_read_progress.sql','2025-08-11 19:44:39');
