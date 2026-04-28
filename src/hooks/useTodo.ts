import { useState, useEffect, type FormEvent } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Carregar tarefas do servidor ao abrir a página
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((dados) => setTodoList(dados))
      .catch((err) => console.error("Erro ao carregar tarefas:", err));
  }, []);

  // Enviar para o servidor via POST
  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;

    const resposta = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: todoItem }),
    });

    const novaTarefaNoServidor = await resposta.json();
    setTodoList((prev) => [...prev, novaTarefaNoServidor]);

    event.currentTarget.reset();
    setFilter("all");
  };

  // Avisa o servidor para deletar via DELETE
  const removeTodo = async (id: number) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    const novaListaDeTarefas = todoList.filter((tarefa) => tarefa.id !== id);
    setTodoList(novaListaDeTarefas);
  };

  // Atualiza o status de concluído no Servidor e na Tela
  const toggleTodoCompleted = async (id: number) => {
    const tarefaParaMudar = todoList.find((t) => t.id === id);
    if (!tarefaParaMudar) return;

    const novoStatus = !tarefaParaMudar.completed;

    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: novoStatus }),
      });

      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: novoStatus } : todo,
        ),
      );
    } catch (err) {
      console.error("Erro ao atualizar tarefa:", err);
    }
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = async () => {
    try {
      // Avisa o servidor para apagar no banco
      await fetch("http://localhost:3000/todos/completed", {
        method: "DELETE",
      });

      // Apaga na tela também
      setTodoList((prev) => prev.filter((todo) => !todo.completed));
    } catch (err) {
      console.error("Erro ao limpar concluídas:", err);
    }
  };

  return {
    addTodo,
    toggleTodoCompleted,
    filteredTodos,
    clearCompleted,
    setFilter,
    filter,
    removeTodo,
  };
};
