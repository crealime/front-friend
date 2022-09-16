## GIT

### Справка

`git help <команда>` Справка по определенной команде. Например `git help config` — справка по команде config

`git <команда> --help` Справка по определенной команде.

`man git-<команда>` Справка по определенной команде.

### Конфигурация

`git config --global user.name "John Doe"` Глобальная настройка имени пользователя

`git config --global user.email johndoe@example.com` Глобальная настройка email пользователя

`git config --list` Проверка настроек

### Инициализация репозитория

`git init`

### Работа с состоянием файлов

`git add main.js` Добавление main.js в Stage Area

`git add *.js` Добавление всех js из текущей папки файлов в Stage Area

`git add .` Добавление всех файлов в Stage Area

### Коммиты

`git commit` Коммит с необходимостью написать комментарий в текстовом редакторе (Vim default)

`git commit -v` Коммит с необходимостью написать комментарий в текстовом редакторе с более развернутой изначальной информацией об изменениях

`git commit -m 'First commit'` Коммит с комментарием, написанными в командной строке

`git commit -a` Автоматическое индексирование файлов перед коммитом

### Клонирование репозитория

`git clone https://github.com/crealime/some` Клонирование по HTTP

`git clone https://github.com/crealime/some project` Клонирование по HTTP в создаваемую папку project

`git clone git@github.com:crealime/some.git` Клонирование по SSH

### Проверка состояния

`git status` Вывод состояния файлов

`git status -s` или `git status --short` Вывод упрощенного варианта

`git diff` Вывод того, что было изменено, но не проиндексировано

`git diff --staged` Вывод того, что проиндексировано, но не зафиксировано

`git diff --cached` Проиндексированные изменения (удобно если есть и не проиндексированные одновременно)

### Удаление файлов

`rm some.js` Удаление самого файла из рабочей папки (Linux)

`git rm some.js` Индексирование удаления файла (и удаление самого файла, если он еще есть в папке)

`git rm --cached some.js` Перестать отслеживать файл, но оставить его в рабочей папке

`git rm -r --cached some-folder` Перестать отслеживать папку some-folder и ее содержимое

### Переименование файлов

`git mv some.js new-some.js` Переименование файла с последующим индексированием. Эквивалентно последовательности команд:

`mv some.js new-some.js`
`git rm some.js`
`git add new-some.js`

### История версий

`git log` Вывод сохраненных версий в обратном порядке

`git log -p -2` Вывод разницы между коммитами с ограничением в 2 коммита

`git log --stat` Вывод разницы с краткой статистикой

`git log --pretty=oneline` Вывод коммитов в одну строку

`git log --graph` Вывод коммитов с простым графическим оформлением

#### Распространенные параметры команды git log

| Параметр          | Описание                                                                                                                                 |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `-p`              | Показывает изменения, внесенные в каждую версию                                                                                          |
| `--stat`          | Показывает статистику измененных файлов в каждом коммите                                                                                 |
| `--shortstat`     | Показывает только строку с изменениями/вставками/удалениями от команды --stat                                                            |
| `--name-only`     | Показывает список измененных файлов после информации о коммите                                                                           |
| `--name-status`   | Показывает список измененных файлов с информацией о добавлении/изменении/удалении                                                        |
| `--abbrev-commit` | Показывает только первые несколько символов контрольной суммы SHA-1 вместо всех 40                                                       |
| `--relative-date` | Показывает дату не в полном, а в относительном формате (например, «2 недели назад»)                                                      |
| `--graph`         | Показывает ASCII-граф истории ветвлений и слияний вместе с выводом команды log                                                           |
| `--pretty`        | Показывает коммиты в альтернативном формате. Возможны параметры oneline, short, full, fuller и format (с указанием вашей версии формата) |

#### Параметры для форматирования

`git log --pretty=format:"%h - %an, %ar : %s"` Вывод коммитов в определенном формате

| Параметр  | Описание выводимых данных                                |
|-----------|----------------------------------------------------------|
| `%H`      | Хеш-код коммита                                          |
| `%h`      | Сокращенный хеш-код коммита                              |
| `%T`      | Хеш-код дерева                                           |
| `%t`      | Сокращенный хеш-код дерева                               |
| `%P`      | Хеш-код родительских коммитов                            |
| `%p`      | Сокращенный хеш-код родительских коммитов                |
| `%an`     | Имя автора                                               |
| `%ae`     | Электронная почта автора                                 |
| `%ad`     | Дата создания оригинала (формат учитывает –date= option) |
| `%ar`     | Дата создания оригинала, в относительной форме           |
| `%cn`     | Имя создателя версии                                     |
| `%ce`     | Электронная почта создателя версии                       |
| `%cd`     | Дата создания версии                                     |
| `%cr`     | Дата создания версии в относительном формате             |
| `%s`      | Комментарий                                              |

`git log --since=2.weeks` Вывод коммитов за последние две недели

`git log --author=...` Вывод коммитов от определенного автора

### Параметры, ограничивающие вывод команды git log

| Параметр                   | Описание                                                                                         |
|----------------------------|--------------------------------------------------------------------------------------------------|
| `-(n)`                     | Показывает только последние n коммитов                                                           |
| `--since`, <br>`--after`   | Показывает только коммиты, внесенные после указанной даты                                        |
| `--until`, <br>`--before`  | Показывает только коммиты, внесенные до указанной даты                                           |
| `--author`                 | Показывает только коммиты определенного автора                                                   |
| `--committer`              | Показывает только коммиты, внесенные определенным участником                                     |
| `--grep`                   | Показывает только коммиты с сообщением фиксации, содержащим указанную строку                     |
| `-S`                       | Показывает только коммиты, в которых добавленный или удаленный код совпадает с указанной строкой |

## Отмена изменений

`git commit –amend` Перезапись последнего коммита

`git checkout -- some.js` Отмена изменений в определенном файле к предыдущему коммиту.  Выполнять аккуратно, с пониманием последствий!!!

`git reset --hard` Отмена всех изменений в рабочей папке к предыдущему коммиту. Выполнять аккуратно, с пониманием последствий!!!

`git reset HEAD some.js` Отмена индексирования файла

## Удаленные репозитории

`git remote` Вывод коротких записей об удаленных репозиториях

`git remote -v` Вывод записей об удаленных репозиториях с информацией об URL

`git remote add newremote https://github.com/paulboone/ticgit` Добавление удаленного репозитория под именем newremote

`git fetch pb` Теперь можно скачать информацию из репо, используя короткое имя. Извлечение данных из удаленного репо без слияния с локальными ветками.

`git fetch --all` Get all up-to-date information from server

`git pull` Скачивание актуальной информации из удаленного репо и выполнение слияния с локальной веткой, настроенной на слежение за удаленной.

`git push origin master` Send data to a remote repository. Branch master to the server origin.

`git push origin locbr:servbr` Send branch locbr to the server origin with different name servbr

`git remote show origin` Вывод данных об удаленном репозитории

`git remote rename old new` Переименование удаленного репозитория (изменение короткого имени) с old на new

`git remote rm new` Удаление ссылки на удаленный репозиторий

## Теги

`git tag` Вывод всех доступных тегов

`git tag -l ‚v1.8.5*'` Вывод тегов версии v1.8.5

`git tag -a v1.4 -m 'my version 1.4'` Добавление полноценного тега с комментарием

`git tag v1.4-lw` Добавление легковесного тега (только ссылка на коммит)

`git tag -a v1.2 9fceb02` Добавление тега коммиту `9fceb02`

`git show v1.2` Вывод информации о теге

`git push origin v1.5` Отправка тега в удаленный репозиторий

`git push origin --tags` Отправка всех тегов в удаленный репозиторий

## Aliases

`git config --global alias.co checkout` Now `git co` works like `git checkout`

`git config --global alias.br branch`

`git config --global alias.ci commit`

`git config --global alias.st status`

`git config --global alias.unstage 'reset HEAD --'` Now `git unstage file.js` equals `git reset HEAD file.js` (de-indexing)

`git config --global alias.last 'log -1 HEAD'` Now `git last` showing the last commit

## Branching

`git branch` Show list of the all branches

`git branch -v` Show last commits in the all branches

`git branch --merged` Show branches that are merged into the current branch

`git branch --no-merged` Show branches that are not merged into the current branch

`git branch testing` Create branch testing

`git log --oneline --decorate` Display information about `HEAD` pointer and branches

`git checkout testing` Switch to the branch `testing`

`git checkout -b testing` Create the branch testing and moving to it

`git log --oneline --decorate –graph --all` Show commit, pointer locations, and points of divergence

`git checkout master` `git merge testing` Merge the branch `master` into the branch `testing`

`git branch -d testing` Delete a branch

`git branch -d` Delete all branches, that are merged into the current branch

`git branch -D testing` Force delete branch

`git merge origin/serbr` Merge server branch `serbr` into the current branch

`git checkout -b brloc origin/brserv` Create new branch `brloc` based on remote branch `brserv`

`git checkout --track origin/brserv` Create new branch `brserv` based on remote branch `brserv` (with the same name)

`git branch -u origin/brserv` or `git branch -set-upstream-to origin/brserv` Link the newly downloaded remote branch to the local branch or change the remote branch

`git branch -vv` Show list of the related local and remote branches

`git push origin --delete brserv` Delete remote branch `brserv`

## Rebase

`git checkout somebr` `git rebase master` Moving commits to the branch `master` from the branch `somebr`

`git checkout somebr` `git rebase master` Moving commits to the branch `master` from the branch `somebr`


















