# demand-forecast-frontend

Frontend для проекта хакатона "Яндекс.Практикум" и "Лента"

## Авторы:


- Константин Нивников (https://github.com/nivnikoff)
- Роман Красинский (https://github.com/RomanKrasinskiy)


## Технологии:

- Vite 4.4.5
- React 18.2.0
- Redux 4.2.1
- React Router 6.16.0
- ESLint 8.45.0
- Chart.js 4.4.0
- Docker 6.1.3

## Реализовано: 

- Авторизация по токену. 
- 
- 
- 

## В работе: 

- Добавление фактических данных: принимает входящий запрос на добавление исторических данных по продажам, обрабатывает их и складывает в БД. 
- Запускает и управляет процессом инференса. По расписанию (раз в день) данных начинает процесс прогнозирования.

## Запуск в контейнерах
- Клонировать репозиторий и перейти в него в командной строке:
```
git clone git@github.com:bobr2072/YL_hackathon_backend.git
```
```
cd YL_hackathon_backend
```

- Переход в папку с docker-compose для запуска контейнеров (доступ по http://localhost:80/)
```
cd infra/
```

- Создать файл .env и прописать в него свои данные.
Пример:
```
DJANGO_SECRET_KEY= 'django-insecure-example-seckret-key'
```

- Запуск проекта
```
docker-compose up -d
```

- Создание суперпользователя
```
docker-compose exec backend python manage.py createsuperuser
```

- Загрузка данных в базу из csv-файла и из базы в csv-файл:
```
docker-compose exec backend python manage.py uploading_to_db
```
```
docker-compose exec backend python manage.py loading_from_db
```

## Локальный запуск

- Переход в папку с backend для запуска проекта локально (доступ по http://127.0.0.1:8000/)

- Cоздать и активировать виртуальное окружение:
```
python -m venv venv
```
```
source venv/Scripts/activate
```

- Установить зависимости из файла requirements.txt:
```
pip install -r requirements.txt
```

- Выполнить миграции:
```
python manage.py makemigrations
```
```
python manage.py migrate
```

- Запустить проект:
```
python manage.py runserver
```

- Создание суперпользователя
```
python manage.py createsuperuser
```

## К проекту подключен Swagger, в котором можно ознакомиться с эндпоинтами и методами, а также с примерами запросов, ответов и кода:
```
http://127.0.0.1:8000/api/swagger/
```

## Запуск тестов
- Запускаются при пуше и pull request, а также через терминал
```
python manage.py test api.tests
```