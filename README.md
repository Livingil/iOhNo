Области хранения данных:

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- ползователь:БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), store (использование на клиенте)
- виджет: БД (список виджетов), store (отображение в браузере)
- контент виджета Заметки: БД (заметок), store (отображение в браузере)
- контент виджета Расписание: БД (список дел), store (отображение в браузере)
- контент виджета Календарь: БД (календаря), store (отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registred_at / role_id
- роли - roles: id / name
- виджет - widgets: id / name / content
- контент виджета Заметки: notes: id / content / pablishet_at / post_id
- контент виджета Расписание: schedule: id / content / pablishet_at
- контент виджета Календарь: calendar: id / content / pablishet_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема для redux store (на клиенте):

- user: id / login / roleId
- widgets: массив widget: id / title / icon / contentCount
- schedule: массив todo: id / title
- calendar: массив day: id
- notes: массив note: id / author / content / publishedAt
- todo: id / title / imageUrl / content / publishedAt / noteId
- day: id / imageUrl / content / notes: массив note: id / content / publishedAt
- users: массив user: id / login / registeredAt / role
