# Golden Raspberry Awards Application

Esta é uma aplicação Angular desenvolvida para exibir informações sobre os indicados e vencedores da categoria **Pior Filme** do Golden Raspberry Awards. A aplicação inclui um dashboard com estatísticas detalhadas e uma página de listagem completa de filmes.

## 📋 Funcionalidades

### **1. Dashboard**
- Exibe:
  - **Anos com mais de um vencedor**
  - **Top 3 estúdios com mais vitórias**
  - **Produtores com maior e menor intervalo entre vitórias**
  - **Lista de vencedores por ano (buscável)**

### **2. Lista de Filmes**
- Tabela paginada com:
  - **ID**, **Ano**, **Título**, **Vencedor** (Sim/Não)
  - Filtros:
    - Por ano
    - Por status de vencedor (Sim/Não)

## 🛠️ Tecnologias Utilizadas

- **Angular 16+** (Standalone Components)
- **Angular Material**
- **Bootstrap**
- **Karma** e **Jasmine** para testes unitários
- **API REST** para dados

## 🔗 API Utilizada
A aplicação consome dados da API pública disponível em:
```
https://challenge.outsera.tech/api/movies
```

### **Endpoints Importantes**
- `?projection=years-with-multiple-winners`: Anos com múltiplos vencedores
- `?projection=studios-with-win-count`: Estúdios com mais vitórias
- `?projection=max-min-win-interval-for-producers`: Intervalos entre vitórias de produtores
- `?winner=true&year=YEAR`: Vencedores de um ano específico
- `?page=PAGE&size=SIZE`: Paginação de filmes

## 🚀 Instalação e Execução

### **1. Clonar o Repositório**
```bash
https://github.com/seu-usuario/seu-repositorio.git
```

### **2. Instalar Dependências**
```bash
npm install
```

### **3. Executar a Aplicação**
```bash
ng serve
```
Acesse a aplicação em: [http://localhost:4200](http://localhost:4200)

### **4. Executar Testes**
```bash
ng test
```

## 📂 Estrutura de Pastas

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/        # Dashboard Component
│   │   ├── movie-list/       # Movie List Component
│   │   └── navbar/           # Navbar Component
│   ├── services/
│   │   └── movie.service.ts  # Serviço para consumo da API
│   └── app.component.ts      # Componente principal
├── assets/                   # Arquivos estáticos
└── environments/             # Configurações de ambiente
```

## 🧪 Testes

### **1. Cobertura**
Os testes cobrem as seguintes funcionalidades:
- Criação de componentes
- Consumo da API
- Renderização correta de tabelas e dados
- Filtragem e paginação

### **2. Executar Testes**
Para rodar os testes, use o comando:
```bash
ng test
```

## 📱 Responsividade
A aplicação é responsiva e otimizada para telas com largura mínima de **768px**.

## 🧩 Melhorias Futuras
- Adicionar testes E2E
- Melhorar mensagens de erro para falhas na API
- Implementar cache para dados mais acessados

## 📝 Licença
Este projeto está sob a licença [MIT](LICENSE).

---

Feito com ❤️ por [Seu Nome](https://github.com/seu-usuario).
