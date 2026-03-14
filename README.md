# Projeto To-Do List com React e TypeScript

Um aplicativo de lista de tarefas simples, construído com React, TypeScript e Tailwind CSS.

## Funcionalidades

*   Adicionar novas tarefas
*   Marcar tarefas como concluídas
*   Excluir tarefas
*   Alternar entre os temas claro e escuro
*   Filtrar tarefas por "Todas", "Ativas" e "Concluídas"

## Tecnologias Utilizadas

*   **React:** Uma biblioteca JavaScript para construir interfaces de usuário.
*   **TypeScript:** Um superconjunto de JavaScript que adiciona tipagem estática.
*   **Tailwind CSS:** Um framework CSS utilitário para um design rápido e customizável.
*   **Vite:** Uma ferramenta de build moderna e rápida para o desenvolvimento web.
*   **ESLint:** Uma ferramenta de linting para identificar e corrigir problemas no código.

## Começando

Para executar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:5173](http://localhost:5173) (ou a porta que o Vite indicar) no seu navegador para ver o aplicativo.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

*   `npm run dev`: Inicia o aplicativo em modo de desenvolvimento.
*   `npm run build`: Compila o aplicativo para produção na pasta `dist`.
*   `npm run lint`: Executa o linter para verificar a qualidade do código.
*   `npm run preview`: Inicia um servidor local para visualizar a build de produção.

## Estrutura do Projeto

O código-fonte está localizado na pasta `src/` e está organizado da seguinte forma:

```
src/
|-- components/      # Componentes React reutilizáveis
|-- contexts/        # Contextos React (ex: ThemeProvider)
|-- hooks/           # Hooks customizados (ex: useTodo)
|-- styles/          # Estilos globais
|-- App.tsx          # Componente principal da aplicação
|-- main.tsx         # Ponto de entrada da aplicação
```