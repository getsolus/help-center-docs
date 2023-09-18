:::note

The ` --cleanup=scissors` flag is necessary. By default, git treats lines starting with # as a comment, and removes them.

If you would like to always use this flag without having to type it manually you can do so in one of two ways.

1. Set an alias in [`~/.gitconfig`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-alias) such as
   ```bash
   cs = commit --cleanup=scissors
   ```
  You can then use `git cs` which will do the same thing as `git commit --cleanup=scissors`.

2. Set your git global config to always use the flag. To do so run
```bash
git config --global commit.cleanup scissors
```

:::