#!/usr/bin/env bash

# Escape all unescaped '>' characters except for the lines starting with "title:"
for file in `find ./docs/api`; do
    if [ -f "$file" ]; then
        mv "$file" "$file.back"
        sed -e '/^title:/n;s/\([^\\]\)\>/\1\\\>/g' "$file.back" &> "$file"
        if [ $? -eq 0 ]; then
            rm "$file.back"
            echo "fixed: $file"
        else
            mv "$file.back" "$file"
            echo "error: $file"
        fi
    fi
done
