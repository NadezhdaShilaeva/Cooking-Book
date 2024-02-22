# Cooking Book
###### Проект по web-программированию
### Рецепты здоровых и полезных блюд - *HealthyFoodBook*

## Описание

Проект реализует web-сайт, который содержит **рецепты** простых в приготовлении, вкусных, здоровых и полезных блюд с пошаговым описанием процесса их приготовления и изображениями готовых блюд.

На **главной странице** пользователь может:
* Просматривать ***каталог рецептов***, изначально отсортированный по популярности рецептов (количеству лайков).
* Просматривать рецепты из определенной ***категории*** с помощью выбора соответсвующей категории в бургер-меню.
* Искать рецепт по ***названию*** с помощью поисковой строки.
* Просматривать рецепты с заданными параметрами по ***Категории***, ***Ингредиентам*** и ***Времени приготовления***.
* Запросить больше релевантных рецептов по нажатию кнопки ***Показать больше***.
* Добавлять рецепт в ***Избранное*** с помощью лайка в его правом нижнем углу.
* Просматривать ***полезные мини-советы***.
* Запросить больше мини-советов по нажатию кнопки ***Показать больше***.
* Просматривать таблицу калорийности основных продуктов.
* Перейти в мои социальные сети ***"Telegram", "VK", "WhatsApp"*** для связи.
* Просматривать время загрузки страницы в ее *footer'е*.

На странице **"Мои любимые рецепты"** пользователь может:
* Просматривать свои рецепты, добавленные в избранное.
* Искать среди сохраненных рецептов рецепт по ***названию*** с помощью поисковой строки.
* Фильтровать свои сохраненные рецепты по ***категории***.
* Удалять рецепт из избранных с помощью второго нажатия лайка в правом нижнем углу рецепта.
* Запросить больше сохраненных рецептов по нажатию кнопки ***Показать больше***.

На странице **"Поделиться рецептом"** пользователь может:
* Задать ***параметры*** своего нового рецепта:
    * Загрузить ***фото*** рецета
    * Указать ***название*** рецепта
    * Указать ***время***, необходимое для приготовления
    * Указать ***количество порций***
    * Выбрать ***категорию*** блюда из предложенных
    * Добавить необходимые **ингредиенты** для приготовления, указав для каждого ***Название, Количество, Единицы измерения***
    * Заполнить ***инструкцию приготовления***, описав каждый шаг в соответствующем поле.
* ***Отправить*** созданный рецепт на модерацию.
* ***Схранить*** заплоненные параметры рецепта в *local storage* своего браузера.
* ***Очистить*** все заполненные поля.

На странице **"Войти"** пользователь может:
* Указать свои ***данные для авторизации***: 
    * электронную почту
    * пароль.
* ***Авторизоваться*** в системе. 
* Заполнить свои ***данные для регистрации***: 
    * электронную почту
    * пароль.
* ***Зарегистриоваться*** в системе.


## Установка

```bash
$ npm install
```

## Запуск приложения

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Тестирование

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Автор

**ФИО:** Шиляева Надежда Сергеевна  
**Группа:** М33031  
