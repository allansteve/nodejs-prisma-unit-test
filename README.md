# GymPass App

## Introdução
Bem-vindo ao **GymPass**, um aplicativo moderno e intuitivo projetado para melhorar sua experiência de treino. Nosso app oferece uma plataforma conveniente para encontrar academias próximas, realizar check-ins e acompanhar o seu progresso de fitness. Ideal para quem procura flexibilidade e controle total sobre sua rotina de exercícios.

## Funcionalidades

### Requisitos Funcionais (RFs)
- **Cadastro de Usuário**: Registre-se facilmente no aplicativo.
- **Autenticação de Usuário**: Acesse sua conta com segurança.
- **Perfil do Usuário**: Visualize e gerencie seu perfil.
- **Check-ins**: Veja o número de check-ins realizados.
- **Histórico de Check-ins**: Acompanhe seu histórico de visitas às academias.
- **Busca de Academias**: Encontre academias próximas ou por nome.
- **Realização de Check-in**: Marque sua presença na academia.
- **Validação de Check-in**: Confirmação de presença pelos administradores.
- **Cadastro de Academia**: Possibilidade de adicionar novas academias pelo administrador.

### Regras de Negócio (RNs)
- **Cadastro Único**: Impedimento de cadastro com e-mail duplicado.
- **Limitação de Check-ins**: Máximo de um check-in por dia.
- **Proximidade para Check-in**: Necessidade de estar a no máximo 100m da academia.
- **Tempo de Validação do Check-in**: Validação possível até 20 minutos após o check-in.
- **Validação por Administradores**: Apenas administradores podem validar check-ins.
- **Cadastro de Academias por Administradores**: Somente administradores podem cadastrar novas academias.

### Requisitos Não-Funcionais (RNFs)
- **Segurança de Senhas**: Criptografia de senha para proteção de dados.
- **Persistência de Dados**: Utilização de banco de dados PostgreSQL.
- **Paginação de Dados**: Listas de dados paginadas com 20 itens por página.
- **Identificação de Usuário**: Uso de JWT (JSON Web Token) para identificação.

## Como Usar
1. **Instalação**: Baixe o aplicativo GymPass em seu dispositivo móvel.
2. **Cadastro e Login**: Crie sua conta e faça login.
3. **Exploração**: Navegue pelas funcionalidades do aplicativo, encontre academias e faça check-ins.
4. **Acompanhamento**: Monitore seus progressos e históricos de visitas.

## Suporte
Para suporte ou dúvidas, entre em contato conosco através do nosso email de suporte: [suporte@gympassapp.com](mailto:suporte@gympassapp.com).

---

Esteja pronto para transformar sua jornada de fitness com GymPass - a escolha inteligente para seu bem-estar e saúde! 🏋️‍♂️💪