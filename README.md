# Meaw
## Índice

[Requisitos](#Requisitos)
[Estrutura](#Estrutura)




## Requisitos

Prisma
Chokidar

## Estrutura

```
src/
├── app.module.ts        # Módulo principal
├── email/               # Módulo para envio de e-mails
│   ├── email.module.ts
│   ├── email.service.ts
│   ├── dto/             # DTOs para o módulo de e-mails
│       └── send-email.dto.ts
├── file-watcher/        # Módulo para watcher de arquivos
│   ├── file-watcher.module.ts
│   ├── file-watcher.service.ts
├── logs/                # Módulo para logging
│   ├── logs.module.ts
│   ├── logs.service.ts
│   ├── entities/        # Entidades Prisma para logs
│       └── email-log.entity.ts
│       └── error-log.entity.ts
├── prisma/              # Configuração do Prisma
│   ├── prisma.module.ts
│   ├── prisma.service.ts
└── main.ts              # Arquivo inicial
```