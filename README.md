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
│   └── entities/             # Entities para o módulo de e-mails
│       ├── email-log.entity.ts
│       ├── email.entity.ts
│       └── send-email.dto.ts
├── file-watcher/        # Módulo para watcher de arquivos
│   ├── file-watcher.module.ts
│   ├── file-watcher.service.ts
├── logs/                # Módulo para logging
│   ├── logs.module.ts
│   ├── logs.service.ts
│   └── entities/        # Entidades Prisma para logs
│       ├── email-log.entity.ts
│       └── error-log.entity.ts
├── prisma/              # Configuração do Prisma
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── main.ts              # Arquivo inicial
├── shared/              # arquivos globais
│   ├── entities/
│   │   └── form.model.ts
│   └── enums
│       ├── form-type.enum.ts
│       └── status-delivery.enum.ts
```