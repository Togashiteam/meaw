# Meaw

## Índice

[Escopo](#Escopo)
[Etapas](#Etapas)
[Requisitos](#Requisitos)
[Estrutura](#Estrutura)

## Escopo

##### Funcionalidades Principais
- 1 Importação e Leitura de Arquivos XML

  - 1.1 Monitoramento de um diretório para capturar os arquivos automaticamente e controle manual.
  - 1.2 Validação e armazenamento no banco SQLite.
  - 1.3 Iniciar esteira de contato com cliente

- 2 Registro no Banco
  - 2.1 Armazenar informações do contato com o cliente
  - 2.2 Atualizar o status da pesquisa até sua conclusão.

- 3 Agendamento de E-mails
  - 3.1 Enviar automaticamente os e-mails.
  - 3.2 Realizar reenvios baseados no comportamento:
    - Sem resposta: enviar lembretes nas semanas 2 e 3.
    - Após 3 emails sem resposta: mandar um outro email finalizando.
    - Ao Responder formulário: parar envios de emails.
    - Optou por não responder: excluir dos envios futuros.

- 4 Gerenciamento de Status
  4.1 Atualizar o status do cliente com base nas respostas:
    - Definir Ordem Lógica de Status: para cada interação.
      - Criado
      - Enviando
      - Enviado
      - Recebido[^1]
      - Envio Ignorado
      - Lembrete[^2]
      - Lembrete Ignorado
      - Reenviado[^3]
      - Reenvio Ignorado
      - Ultimato[^4]
      - Respondido[^5]
      - Cancelado pelo Cliente[^6]
      - Cancelado por tentativas[^7]
      - Cancelado por outros motivos[^8]
    - Respondido (com timestamp).
    - Optou por não participar.
    - Ignorado (após o último envio).

[^1]: Não existe forma segura de garantir que o email foi recebido e a maioria delas ainda infringe o LGPD.
[^2]: **Lembrete** deve ser enviado após uma semana sem resposta do Envio, quando o Status for de `Envio Ignorado`.
[^3]: **Reenvio** deve ocorrer após uma semana sem resposta do Lembrete, quando o Status for de `Lembrete Ignorado`.
[^4]: **Ultimato** deve ocorrer após uma semana sem resposta do Reenvio, quando o Status for de `Reenvio Ignorado`.
[^5]: Ao confirmar resposta no formulário o fluxo dessa avaliação deve ser finalizada.
[^6]: Quando o Cliente afirma positivamente que não tem interesse de responder.
[^7]: Após a envio do `Ultimato` o processo de resposta é considerado cancelado por tentativas caso não respondido em uma semana.
[^8]: Qualquer outro motivo que não venha do pedido de cancelamento pelo cliente, por resposta ao formulário ou por excesso de tentativas.

## Etapas

##### Resumo de Tempo Total

| Etapa                                 | Horas |
| ------------------------------------- | ----- |
| Planejamento e análises               | 12    |
| Leitura e Processamento do XML        | 16    |
| Banco de Dados (SQLite)               | 11    |
| Agendamento e Envio de E-mails        | 19    |
| Gerenciamento de Interações com email | 15    |
| APIs e Backend                        | 11    |
| Relatórios e Visualização             | 12    |
| Testes e Documentação                 | 14    |
| Total                                 | 110   |

## Requisitos

@nestjs/core
prisma
@prisma/client
chokidar
xml2js
nodemailer

dev
@types/xml2js

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


