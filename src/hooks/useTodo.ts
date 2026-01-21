import { useState, type FormEvent } from "react"

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export const useTodo = () => {
    
    const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const todoItem = formData.get("todo") as string;

    if (!todoItem.trim()) return;
      
    setTodoList((prev) => [
      ...prev, 
      {
      id: Date.now(),
      text: todoItem,
      completed: false,
      },
    ]);

    event.currentTarget.reset();

    setFilter("all");
  };

  const removeTodo = (id: number) => {
    const novaListaDeTarefas = todoList.filter(tarefa => tarefa.id !== id);
    setTodoList(novaListaDeTarefas);
  };

  const toggleTodoCompleted = (id: number) => {
    console.log(id);

    const newTodoList = todoList.map((todo) => {
      if (id === todo.id) {
        
        const completed = !todo.completed;
        
        return {
          ...todo,
          completed,
        };
      }

      return todo;
    });

    setTodoList(newTodoList);
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true;
    });

    const clearCompleted = () => {
      setTodoList((prev) => prev.filter(todo => !todo.completed));
    }

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