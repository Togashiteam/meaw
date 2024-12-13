# Projeto Meaw

## Índice

[Produto Final](#ProdutoFinal)
[Descrição](#Descrição)
[Escopo](#Escopo)
[Etapas](#Etapas)
[Requisitos](#Requisitos)
[Estrutura](#Estrutura)

## Produto Final

- 1 **Programa Executável** fica monitorando pasta, enviando emails por arquivo XML encontrado e algumas opções de resposta de resultado.
- 2 **Interface Gráfica** (listagem, ações em batch, gerar arquivos CSV ou XLS, Visualização de gráficos ).
- 3 **Integração Google Cloud** e automatização de respostas dos formulários.

## Descrição

##### Estrutura da Aplicação:

- **Electron**: Interface gráfica, interagindo com o usuário e gerenciando a pasta de monitoramento.
- **NestJS**: API REST para lidar com a lógica de negócio, como processamento dos arquivos, interação com o banco de dados SQLite e envio de emails.
- **SQLite**: Banco de dados local para armazenar informações sobre os clientes, status das pesquisas e histórico de envios de emails.

##### Fluxo de Trabalho (Escopo Principal)

- **Monitoramento da pasta**: Electron monitora a pasta continuamente e, a cada hora, verifica se novos arquivos XML foram gerados.
- **Processamento dos arquivos XML**: NestJS extrai os dados relevantes (email, dados do cliente) dos arquivos XML e os salva no banco de dados SQLite.
- **Envio de emails**: NestJS envia um email para o cliente com um link para a pesquisa de satisfação no Google Forms.
- **Gerenciamento de status**: NestJS acompanha o status da pesquisa (respondida ou não) através da API do Google Forms e envia lembretes caso necessário.
- **Persistência de Dados**: Registros de logs e status em banco SQLite.

##### Desenvolvimento de Interfaces (Escopo em Segundo Estágio)

- Interface de Gerenciamento de Monitoramento de pastas.
- Interface de Lista de Pesquisas para Monitoramento de Status.
- Interface de Gerenciamento de ações de pesquisa.

##### Integração com o Google Forms API (Escopo em Terceiro Estágio)

- **Configurar Google Cloud**: Configurar um projeto no Google Cloud Platform e criar credenciais de serviço.
- **Criação de credenciais**: Vincular credencias com serviços de APIs do Google
- **Autenticação**: Configurar API do Google Forms para verificar o status da pesquisa.

## Escopo

##### Funcionalidades Principais

- 1 Configurações
  - 1.1 Configurar pasta a ser monitorada.
  - 1.2 Configurar intervalo de tempo de ações **tick**, por exemplo de hora em hora.
  - 1.3 Configurar intervalo de tempo entre emails da mesma pesquisa, por exemplo 7 dias.
- 2 Importação e Leitura de Arquivos XML

  - 2.1 Monitoramento de um diretório para capturar os arquivos automaticamente e permitir ações manuais.
  - 2.2 Validação dos dados e persistência.
  - 2.3 Enviar emails de arquivos processados a cada **tick**.
  - 2.4 Ações
    - Opção reenviar pesquisa.
    - Opção reenviar todas as pesquisas da lista.
    - Opção cancelar envio de pesquisa.
    - Opção cancelar envio de todas as pesquisas da lista.
    - Opção de Listar Todas as pesquisas.
    - Opção de Listar Pesquisas não enviadas.
    - Opção de Listar Pesquisas enviadas.

- 3 Banco de Dados

  - 3.1 Armazenar log de arquivos processados.
  - 3.2 Armazenar log de pesquisas enviadas.
  - 3.3 Armazenar resumo diário. (Avançado)
  - 3.4 Armazenar resumo mensal. (Avançado)
  - 3.5 Controlar o status da pesquisa.

- 4 Gerenciamento de emails

  - 4.1 Devem ser enviados automaticamente.
  - 4.2 Podem ser enviados manualmente.
  - 4.3 Podem ser cancelados a qualquer momento antes do envio.
  - 4.4 Comportamentos de Reenvio:
    - **Sem resposta**: enviar lembretes na próxima semana.
    - **3 emails sem resposta**: mandar email com fechamento de pesquisa.
    - **Pesquisa Respondida**: parar envios de emails subsequentes.
    - **Sinalização de desinteresse**: parar envios de emails subsequentes.

- 5 Gerenciamento de Status de pesquisa
  - 5.1 Atualizar o status da pesquisa com base nas respostas:
    - Gerenciamento de status da esteira de pesquisa.
    - Indicar manualmente que uma pesquisa foi respondida.
    - Indicar manualmente que uma pesquisa foi cancelada.
  - 5.2 Status da Esteira de pesquisa
    - Iniciada
    - Enviar
    - Enviada
    - Recebida[^1]
    - Reenviar[^2]
    - Lembrar[^3]
    - Notificar[^4]
    - Respondido[^5]
    - Cancelado pelo Cliente[^6]
    - Cancelado por Tentativas[^7]
    - Cancelado[^8]

##### Escopo em segundo estágio

- 6 Desenvolvimento de Interface
  - Aplicação Electron local
  - Instalador
  - Registro no Windows (Avançado)
  - Interações com Windows (Avançado)

##### Escopo em terceiro estágio

- 7 Integração com Google API.
  - 7.1 Confirmação automatizada de resposta de pesquisa.
    - Necessário conexão com Autenticação OAuth2.0 API da Google via `Google Cloud console`
    - Pode haver custos de manutenção do serviço dependendo do volume de dados.

[^1]: Para o status de **Recebida**, não existe forma segura de garantir que o email foi recebido e a maioria delas ainda infringe o LGPD.

[^2]: **Reenviar** deve ocorrer após tempo entre emails com o Status de `Enviada`.

[^3]: **Lembrar** deve ser enviado após tempo entre emails com o Status de `Reenviar`.

[^4]: **Notificar** deve ocorrer após tempo entre emails com o Status de `Lembrar`.

[^5]: **Respondido**, ao confirmar resposta de pesquisa a esteira de emails deve ser finalizada.

[^6]: **Cancelado pelo Cliente** caso o cliente notifique desinteresse em responder o email.

[^7]: **Cancelado por Tentativas** caso não respondido após tempo entre emails com o status de `Notificar`

[^8]: **Cancelado** quando por qualquer outro motivo que não seja `Cancelado pelo Cliente` ou `Cancelado por Tentativas`.

## Etapas

##### Resumo de Funcionalidades Básicas

| Etapa                                 | Horas |
| ------------------------------------- | ----- |
| Planejamento e análises               | 12    |
| Leitura e Processamento do XML        | 16    |
| Banco de Dados (SQLite)               | 12    |
| Agendamento e Envio de E-mails        | 19    |
| Gerenciamento de Interações com email | 15    |
| APIs e Backend                        | 14    |
| Relatórios                            | 8     |
| Testes e Documentação                 | 36    |
| Implementação e treinamento           | 16    |
| **Total**                             | 148   |

##### Resumo de Escopo em Segundo Estágio

| Etapa                               | Horas |
| ----------------------------------- | ----- |
| Configuração de Projeto             | 4     |
| Desenvolvimento de Interfaces       | 12    |
| Integração com API                  | 10    |
| Desenvolvimento de Filtros e Listas | 12    |
| Apresentação de Relatório \*        | 14    |
| Instalador                          | 12    |
| Vinculação e Registro com Windows   | 18    |
| Testes e Documentação               | 22    |
| Implementação e treinamento         | 6     |
| **Total**                           | 110   |

##### Resumo de Escopo em Terceiro Estágio

| Etapa                                 | Horas |
| ------------------------------------- | ----- |
| Configuração do Ambiente Google Cloud | 6     |
| Implementação de autenticação segura  | 14    |
| Automatização de processo na API      | 12    |
| Testes e Documentação                 | 18    |
| Implementação e treinamento           | 2     |
| **Total**                             | 52    |

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
