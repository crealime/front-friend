## GIT

### Help

`git help <command>` Help for a specific command. For example `git help config` — help for config command.

`git <команда> --help`  Help for a specific command.

`man git-<команда>`  Help for a specific command.

### Config

`git config --global user.name "John Doe"` Global username setting.

`git config --global user.email johndoe@example.com` Global user email setting.

`git config --list` Check the settings.

### Repository initialization

`git init`

### Cloning a repository

`git clone https://github.com/crealime/some` Cloning via HTTP.

`git clone https://github.com/crealime/some project` Cloning via HTTP to the created project folder.

`git clone git@github.com:crealime/some.git` Cloning via SSH.

### Working with file state

`git add main.js` Add main.js to Stage Area.

`git add *.js` Add all js files from current folder to Stage Area.

`git add .` or `git add *` Add all files to Stage Area.

### Commits

`git commit` Commit with the need to write a comment in a text editor (Vim default).

`git commit -v` Commit with the need to write a comment in a text editor with more detailed initial information about the changes.

`git commit -m 'First commit'` Commit with comments written on the command line.

`git commit -a` Automatic file indexing before commit.

### Commit difference

`git diff` Changes in files.

`git diff НЕАD` Differences between НЕАD and the current state of the work directory.

`git diff --cached` Differences between НЕАD and the indexed changes.

`git diff 8dgv8` Differences between 8dgv8 commit and the current state of the work directory.

`git diff --cached 8dgv8` or `git diff --staged 8dgv8` Difference between indexed changes and 8dgv8 commit.

`git diff 8dgv8 rg871` Difference between commits.

`git diff --check 8dgv8 rg871` Warn if changes introduce conflict markers or whitespace errors.

### Reset

`git reset --soft 8dgv8` Move HEAD to the 8dgv8 commit. Work folder will remain unchanged.

`git reset --mixed 8dgv8` Default. Move HEAD to the 8dgv8 commit. Index files will be changed. Work folder will remain unchanged.

`git reset --hard 8dgv8` Move HEAD to the 8dgv8 commit. Index files and work directory will be changed.

### Status check

`git status` File status output.

`git status -s` or `git status --short` Simplified output.

`git diff` Display of what has been modified but not indexed.

`git diff --staged` Display what is indexed but not committed.

`git diff --cached` Indexed changes (handy if there are and not indexed at the same time).

### Delete files

`rm some.js` Delete file from the work directory (Linux).

`git rm some.js` Index deleting file (and deleting the file itself if it's still in the folder).

`git rm --cached some.js` Stop tracking the file, but leave it in the work directory.

`git rm -r --cached some-folder` Stop monitoring some-folder and its contents.

### Renaming files

`git mv some.js new-some.js` Rename file with subsequent indexing. Equivalent to a sequence of commands:

`mv some.js new-some.js`
`git rm some.js`
`git add new-some.js`

### Version history

`git log` Display saved versions in reverse order.

`git log -p -2` Display the difference between commits with a limit of 2 commits.

`git log --stat` Display the difference with brief statistics.

`git log --pretty=oneline` Display commits in one line.

`git log --graph` Display commits with a simple graphical design.

#### Распространенные параметры команды git log

| Parameter                 | Description                                                                                                                          |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `-p`                      | Changes made in each version                                                                                                         |
| `--stat`                  | Statistics of changed files in each commit                                                                                           |
| `--shortstat`             | Only line with changes/inserts/deletions from --stat command                                                                         |
| `--name-only`             | List of changed files after the commit information                                                                                   |
| `--name-status`           | List of modified files with information about adding/changing/deleting                                                               |
| `--abbrev-commit`         | Only first few characters of the SHA-1 checksum instead of all                                                                       |
| `--relative-date`         | Date not in full, but in relative format (for example, "2 weeks ago")                                                                |
| `--graph`                 | ASCII branch and merge history graph along with the output of the log command                                                        |
| `--pretty`                | Commits in an alternate format. Possible options are oneline, short, full, fuller and format (specifying your version of the format) |

#### Options for formatting

`git log --pretty=format:"%h - %an, %ar : %s"` Display commits in a specific format.

| Parameter | Description of output data                                             |
|-----------|------------------------------------------------------------------------|
| `%H`      | The commit hash code                                                   |
| `%h`      | Shorthand commit hash code                                             |
| `%T`      | Tree hash code                                                         |
| `%t`      | Reduced tree hash code                                                 |
| `%P`      | Hash code of parent commits                                            |
| `%p`      | Shortened hash code of parent commits                                  |
| `%an`     | Author's name                                                          |
| `%ae`     | Author email                                                           |
| `%ad`     | Creation date of the original (the format respects the --date= option) |
| `%ar`     | Creation date of the original, in relative form                        |
| `%cn`     | Version creator name                                                   |
| `%ce`     | Version Creator email                                                  |
| `%cd`     | Version creation date                                                  |
| `%cr`     | Version creation date in relative format                               |
| `%s`      | Comment                                                                |

`git log --since=2.weeks` Commits for the last two weeks.

`git log --author=...` Commits from a specific author.

### Options that limit the output of the git log command

| Parameter                 | Description                                                         |
|---------------------------|---------------------------------------------------------------------|
| `-(n)`                    | Only the last n commits                                             |
| `--since`, <br>`--after`  | Only commits made after the specified date                          |
| `--until`, <br>`--before` | Only commits made before the specified date                         |
| `--author`                | Only commits by a specific author                                   |
| `--committer`             | Only commits made by a specific contributor                         |
| `--grep`                  | Only commits with a commit message containing the specified string  |
| `-S`                      | Only commits where added or removed code matches the specified line |

### Undo changes

`git commit –amend` Rewriting the last commit.

`git checkout -- some.js` Revert changes in a specific file to the previous commit. Perform carefully, with an understanding of the consequences!!!

`git reset --hard` Revert all changes in the work directory to the previous commit. Perform carefully, with an understanding of the consequences!!!

`git reset HEAD some.js` Revert file indexing.

### Remote repositories

`git remote` Display short records about remote repositories.

`git remote -v` Display entries about remote repositories with URL information.

`git remote add newremote https://github.com/paulboone/ticgit` Add a remote repository called newremote.

`git fetch pb` Now you can download the information from the repo using the short name. Pulling data from a remote repo without merging into local branches.

`git fetch --all` Get all up-to-date information from server.

`git pull` Download up-to-date information from a remote repo and merging with a local branch configured to follow the remote one.

`git push origin master` Send data to a remote repository. Branch master to the server origin.

`git push origin locbr:servbr` Send branch `locbr` to the server origin with different name `servbr`.

`git remote show origin` Display data about a remote repository.

`git remote rename old new` Rename remote repository (changing short name) from old to new.

`git remote rm new` Remove a link to a remote repository.

### Tags

`git tag` Display all available tags.

`git tag -l ‚v1.8.5*'` Display tags v1.8.5.

`git tag -a v1.4 -m 'my version 1.4'` Add a full tag with a comment.

`git tag v1.4-lw` Add a lightweight tag (commit link only).

`git tag -a v1.2 9fceb02` Adding tag to the commit `9fceb02`.

`git show v1.2` Display information about a tag.

`git push origin v1.5` Send a tag to a remote repository.

`git push origin --tags` Send all tags to a remote repository.

### Aliases

`git config --global alias.co checkout` Now `git co` works like `git checkout`.

`git config --global alias.br branch`

`git config --global alias.ci commit`

`git config --global alias.st status`

`git config --global alias.unstage 'reset HEAD --'` Now `git unstage file.js` equals `git reset HEAD file.js` (de-indexing).

`git config --global alias.last 'log -1 HEAD'` Now `git last` showing the last commit.

### Branching

`git branch` Show list of the all branches.

`git branch -v` Show last commits in the all branches.

`git branch --merged` Show branches that are merged into the current branch.

`git branch --no-merged` Show branches that are not merged into the current branch.

`git branch testing` Create branch testing.

`git log --oneline --decorate` Display information about `HEAD` pointer and branches.

`git checkout testing` Switch to the branch `testing`.

`git checkout -b testing` Create the branch testing and moving to it.

`git log --oneline --decorate –graph --all` Show commit, pointer locations, and points of divergence.

`git branch -d testing` Delete a branch.

`git branch -d` Delete all branches, that are merged into the current branch.

`git branch -D testing` Force delete branch.

`git merge origin/serbr` Merge server branch `serbr` into the current branch.

`git checkout -b brloc origin/brserv` Create new branch `brloc` based on remote branch `brserv`.

`git checkout --track origin/brserv` Create new branch `brserv` based on remote branch `brserv` (with the same name).

`git branch -u origin/brserv` or `git branch -set-upstream-to origin/brserv` Link the newly downloaded remote branch to the local branch or change the remote branch.

`git branch -vv` Show list of the related local and remote branches.

`git push origin --delete brserv` Delete remote branch `brserv`.

### Cherry-pick

`git cherry-pick 9fceb02` Copy a commit to the current branch

`git cherry-pick 9fceb02 --edit` With new comment

`git cherry-pick 9fceb02 --no-commit` Copy changes from commit to the work directory (new commit in current branch not created)

### Merge

`git checkout master` `git merge testing` Merge the branch `testing` into the branch `master`.

`git merge master testing` The same. Merge the branch `testing` into the branch `master`. 


### Rebase

`git checkout somebr` `git rebase master` Moving commits to the branch `master` from the branch `somebr`.

`git rebase -i HEAD~4` Interactive rebase 4 last commits in the current branch

`git rebase -i master` Interactive rebase to the branch `master`

| Parameter in interactive rebase | Description                                    |
|---------------------------------|------------------------------------------------|
| `p` or `pick`                   | Without changes                                |
| `r` or `reword`                 | Without changes, but with new commit message   |
| `f` or `fixup`                  | Add to previous commit                         |
| `s` or `squash`                 | Add to previous commit with his commit message |
| `d` or `drop`                   | Remove commit                                  |


