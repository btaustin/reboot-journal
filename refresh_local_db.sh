#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- 1. Prompt for the Database Name ---
read -p "Enter the D1 database name (from wrangler.toml): " DB_NAME

# Check if the database name was provided
if [ -z "$DB_NAME" ]; then
  echo "❌ Error: Database name cannot be empty."
  exit 1
fi

echo "✅ Database name set to: $DB_NAME"
BACKUPS_DIR="./.backups"

mkdir -p "$BACKUPS_DIR"

# --- 2. Generate a Dump of the Remote D1 Database ---
echo "▶️  Starting export of remote database '$DB_NAME'..."
npx wrangler d1 export "$DB_NAME" --table=d1_migrations --remote --output "$BACKUPS_DIR/$DB_NAME.d1_migrations.sql"
npx wrangler d1 export "$DB_NAME" --table=Category --remote --output "$BACKUPS_DIR/$DB_NAME.Category.sql"
npx wrangler d1 export "$DB_NAME" --table=User --remote --output "$BACKUPS_DIR/$DB_NAME.User.sql"
npx wrangler d1 export "$DB_NAME" --table=Post --remote --output "$BACKUPS_DIR/$DB_NAME.Post.sql"
npx wrangler d1 export "$DB_NAME" --table=PostCategory --remote --output "$BACKUPS_DIR/$DB_NAME.PostCategory.sql"
npx wrangler d1 export "$DB_NAME" --table=PostRead --remote --output "$BACKUPS_DIR/$DB_NAME.PostRead.sql"
npx wrangler d1 export "$DB_NAME" --table=MailingListEntry --remote --output "$BACKUPS_DIR/$DB_NAME.MailingListEntry.sql"
npx wrangler d1 export "$DB_NAME" --table=Comment --remote --output "$BACKUPS_DIR/$DB_NAME.Comment.sql"

# Combine all exported SQL files into one dump file
DUMP_FILE="$BACKUPS_DIR/$DB_NAME.remote_dump.sql"
cat "$BACKUPS_DIR/$DB_NAME.d1_migrations.sql" "$BACKUPS_DIR/$DB_NAME.Category.sql" "$BACKUPS_DIR/$DB_NAME.User.sql" "$BACKUPS_DIR/$DB_NAME.Post.sql" "$BACKUPS_DIR/$DB_NAME.PostCategory.sql" "$BACKUPS_DIR/$DB_NAME.MailingListEntry.sql" "$BACKUPS_DIR/$DB_NAME.PostRead.sql" "$BACKUPS_DIR/$DB_NAME.Comment.sql" > "$DUMP_FILE"

echo "✅ Successfully exported remote database to '$DUMP_FILE'."

# --- 3. Drop All Tables from the Local Database ---
echo "▶️  Dropping all tables from the local database '$DB_NAME'..."
npx wrangler d1 execute "$DB_NAME" --local --file ./drop_tables.sql
echo "✅ All tables dropped from local database."

# --- 4. Import the Dump into the Local Database ---
echo "▶️  Importing data into the local database '$DB_NAME'..."
npx wrangler d1 execute "$DB_NAME" --local --file ./"$DUMP_FILE"
echo "✅ Successfully imported data into the local database."

# --- Cleanup ---
rm "$DUMP_FILE"
echo "✅ Cleanup complete. Local database is now a mirror of remote."
echo "🎉 Sync complete!"


