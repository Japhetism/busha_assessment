#!/bin/bash

# Set variables
APP_NAME="busha"
BUILD_DIR="build"

# Make sure the script is being run from the root of the project
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found. Please run this script from the root of your React project."
  exit 1
fi

# Install dependencies (if needed)
echo "Installing dependencies..."
npm install || { echo "npm install failed"; exit 1; }

# Clean previous build
echo "Cleaning previous build..."
rm -rf $BUILD_DIR

# Build the React app
echo "Building React app..."
npm run build || { echo "Build failed"; exit 1; }

# Confirm build success
if [ -d "$BUILD_DIR" ]; then
  echo "Build successful! Your app is ready in the '$BUILD_DIR' directory."
else
  echo "Build failed. Please check the error messages above."
  exit 1
fi
