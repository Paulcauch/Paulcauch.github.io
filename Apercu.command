#!/bin/bash
set -e
cd -- "$(dirname -- "$0")"
# Use installed tools, with the bundled runtime as a fallback on this Mac.
preview_runtime="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies"
if ! command -v node >/dev/null 2>&1 && [ -x "$preview_runtime/node/bin/node" ]; then
  export PATH="$preview_runtime/node/bin:$PATH"
fi
if ! command -v pnpm >/dev/null 2>&1 && [ -x "$preview_runtime/bin/fallback/pnpm" ]; then
  export PATH="$preview_runtime/bin/fallback:$PATH"
fi
if ! command -v node >/dev/null 2>&1 || ! command -v pnpm >/dev/null 2>&1; then
  echo "Node.js et pnpm sont nécessaires pour lancer cet aperçu."
  read -r -p "Appuyez sur Entrée pour fermer."
  exit 1
fi
exec pnpm dev
