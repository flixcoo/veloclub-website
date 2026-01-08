#!/bin/bash
# Colors
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
BOLD="\033[1m"
RESET="\033[0m"

# Print helpers
info()  { printf "%b\n" "${BOLD}${BLUE}[INFO] ${RESET} $*"; }
step()  { printf "\n%b\n" "${YELLOW}---- ${BOLD}$*${RESET}${YELLOW} ----${RESET}"; }
success(){ printf "%b\n" "${GREEN}[ OK ] ${RESET}${BOLD}$*${RESET}"; }
failure(){ printf "%b\n" "${RED}[ ERR ] ${RESET}${BOLD}$*${RESET}"; }

# Decorative header
printf "%b\n" "${BOLD}${BLUE}==============================================${RESET}"
printf "%b\n" "${BOLD}${BLUE}=     React Build — Update & Create public/    =${RESET}"
printf "%b" "${BOLD}${BLUE}==============================================${RESET}"


# STEP 1: git pull
step "1) Update repository"
info "Running: git pull"
if git pull; then
    success "Repository updated"
else
    failure "git pull failed — continuing anyway"
fi

# STEP 2: Remove old build/ directory
step "2) Remove old build/ directory"
info "Running: rm -rf build/"
if rm -rf build/; then
    success "Old build/ removed (if present)"
else
    failure "Removing build/ failed or directory did not exist"
fi

# STEP 3: Install dependencies (unless skipped)
step "3) Install dependencies"
info "Attempting: npm ci"
if npm ci; then
  success "npm ci succeeded"
else
  failure "npm ci failed — falling back to npm install"
  info "Running: npm install"
  if npm install; then
    success "npm install succeeded"
  else
    failure "npm install failed — you may need to inspect the logs"
    # don't exit; let the build step try, but warn the user
  fi
fi

# STEP 4: Build
step "4) Run production build"
info "Running: npm run build"
if npm run build --if-present; then
    success "Build completed"
else
    failure "Build step failed — check npm run build output"
    # exit non-zero to make CI detect failure
    exit 2
fi

printf "%b\n" "${GREEN}Done. Thanks!"
