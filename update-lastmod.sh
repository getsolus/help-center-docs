#!/bin/bash

function usage {
    echo "Usage: update-lastmod.sh [file]"
    echo ""
    echo "Updates the lastmod field in TOML headers to the current"
    echo "system time in ISO 8601 format. If no file is specified,"
    echo "all markdown files that are currently changed in the git"
    echo "working directory are processed (except for README.md)."
    echo ""
    echo "  -h    Display this message and exit"
}

while getopts ":h" opt; do
    case "$opt" in
        *)
            usage
            exit 0
            ;;
    esac
done

shift $((OPTIND-1))

lastmod=$(date --iso-8601=seconds)
echo "New timestamp: $lastmod"

function update_file {
    echo "Updating $1"
    sed -i "s/lastmod = \".*\"/lastmod = \"$lastmod\"/" "$1"
}

if [[ $# -gt 0 ]]; then
    if [[ -f "$1" && "$1" =~ .*\.md ]]; then
        update_file "$1"
    fi
else
    while read -r file; do
        update_file "$file"
    done < <(git diff --name-only --diff-filter=d -- "*.md" | grep -v "README.md")
fi
