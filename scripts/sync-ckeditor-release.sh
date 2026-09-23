#!/usr/bin/env bash
# Copy a built CKEditor release from ckeditor-dev into lib/ckeditor/.
# Excludes dev toolchain files that must not ship in @oat-sa/tao-core-shared-libs.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CKEDITOR_DEV="${CKEDITOR_DEV:-}"
RELEASE_DIR="${CKEDITOR_DEV}/dev/builder/release/ckeditor"
TARGET_DIR="${REPO_ROOT}/lib/ckeditor"

if [[ -z "$CKEDITOR_DEV" || ! -d "$RELEASE_DIR" ]]; then
	echo "error: set CKEDITOR_DEV to ckeditor-dev checkout with a built release" >&2
	echo "  export CKEDITOR_DEV=/path/to/ckeditor-dev" >&2
	echo "  cd \"\$CKEDITOR_DEV/dev/builder\" && ./build.sh" >&2
	exit 1
fi

if [[ ! -f "$RELEASE_DIR/ckeditor.js" ]]; then
	echo "error: no built ckeditor.js at $RELEASE_DIR" >&2
	exit 1
fi

rsync -a --delete \
	--exclude '.git' \
	--exclude '.bender' \
	--exclude 'node_modules' \
	--exclude 'package.json' \
	--exclude 'package-lock.json' \
	--exclude 'sonar-project.properties' \
	"$RELEASE_DIR"/ "$TARGET_DIR"/

echo "Synced $RELEASE_DIR -> $TARGET_DIR"
echo "Verify: test - ! -f lib/ckeditor/package-lock.json"
