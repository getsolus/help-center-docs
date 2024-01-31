#!/usr/bin/env bash
set -e

# Checks that .cspell-allowed-words.txt exists, then:
# 1. Converts all text to lowercase
# 2. Sorts the file
# 3. Removes duplicate entries
 
TARGET='.cspell-allowed-words.txt'

if [ ! -f $TARGET ]; then
    echo "File $TARGET not found!"
    exit 1
fi

awk -i inplace '{print tolower($0)}' $TARGET
sort -o $TARGET $TARGET
awk -i inplace '!seen[$0]++' $TARGET