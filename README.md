
## Фичи 🛠

1. Приложению не хватает unit-test'ов! Нам надо это исправить :) 

2. Юзеры жалуются на то, что таблица слишком длинная, и они устают ее скроллить. Можете **добавить пагинацию для таблицы**? (И не забудьте покрыть новый функционал тестами)

3. На странице сезона непонятно, кто выиграл этот сезон. Нужно как-то **подсветить строки гонок, которые выиграл чемпион сезона**.

4. Почти все готово, осталось лишь немного улучшить UX. Надо **сделать красивые состояния загрузки и ошибки в таблицах**. Мы верим в Ваши дизайнерские способности ;)

5. API позволяет **добавить ссылку на Википедию для каждого водителя**. Давайте сделаем это! 

6. Некоторые люди просто не могут без темной темы. Было бы неплохо добавить ее, и не забыть про переключатель где-нибудь в углу.

## Баги 🐞

1. Некоторые юзеры жалуются на то, что **стартовая страница загружается слишком медленно**. Не могли бы ли вы немного поиграть в детектива, и понять, что замедляет загрузку? Ну и починить проблему, конечно же :)

2. К сожалению, у некоторых наших пользователей старые iPhone 5/SE. Не могли бы ли вы **улучшить адаптивность для девайсов с маленькими экранами (320px)**?

Если у Вас есть еще идеи, как можно улучшить приложения - они будут только приветствоваться! Только не забудьте добавить изменения в **Changelog** в этом файле.

## Available Scripts

### `npm run start`

The command opens the project in a browser at [http://localhost:4200](http://localhost:4200)

### `npm run build`

The command builds the project.

### `npm run test`

The command launches tests.


**Changelog**

1. Юнит тесты добавлены к сервису, стору и компонентам, есть еще что покрывать

2. Пагинация добавлена, создан отдельынй компонент, который добавлен в 2 страницы season и race

3. Строки на странице гонок подствечены другим цветом по фильтру победитель с помощью ngClass

4. Состояние загрузки и ошибки добавлены, добавлен компонент спиннет, сервис и интерсепторы

5. Ссылка на википедию добавлена, но не с помощью апи ergast так как опции такой не нашла

6. Переключатель темы добавлен на страницу сезонов, в иделе бы на главную страницу перенести хотелось

Баги
1. Страницу загрузки ускорило уменьшение отображения строк в таблице также нужно еще смотреть стор и обработку ошибок как вариант вынести из стора в сервисы

2. Баг по адаптивности iPhone 5/SE пофикшен, соответсвуюшие медиазапросы добавлены в стили

