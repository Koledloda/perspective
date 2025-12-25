# Supabase SQL Schema для проекта

## Таблица администраторов
```sql
create table if not exists admins (
  id serial primary key,
  login text not null unique,
  password text not null
);
```

## Таблица заявок на звонок
```sql
create table if not exists call_requests (
  id serial primary key,
  phone text not null,
  created_at timestamp with time zone default timezone('utc', now()) not null,
  processed boolean default false not null
);
```

-- Индекс для ускорения поиска новых заявок
```sql
create index if not exists idx_call_requests_processed on call_requests(processed);
```

-- Пример добавления администратора (замените логин и пароль на свои значения)
```sql
insert into admins (login, password) values ('admin', 'your_secure_password');
```

-- Пример: получить все необработанные заявки
```sql
select * from call_requests where processed = false order by created_at desc;
```

---
**Важно:**
- Пароли хранятся в открытом виде для простоты примера. Для реального проекта используйте хеширование паролей (например, bcrypt) и храните только хеши.
- Для безопасности настройте Row Level Security (RLS) и разрешения в Supabase, чтобы только администраторы могли читать/обновлять таблицы.
