import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { TodoList } from "./todoList";
import { TodoContext } from "~/context";

export const Todos = component$(() => {
  // TODO UN ESTADO PARA GUARDAR LAS TODOS
  const state = useSignal("");
  const todoStore = useContext(TodoContext);
  // TODO INTERFACE UNA PARA STORE Y UNA TODO
  // TODO INPUT + BOTON QUE ME CREE TODO EN UNA VARIABLE EN STADO
  // TODO MOSTRAR EL ARRAY
  // TODO COMPONENTE PARA CREAR EL TODO Y QUE RECIBA UNA PROP
  // TODO MIRES TAILWIND COMO LE DAS STYLES A ESTO , COMO SI FUERA UNA LIBRETA
  // TODO CONTEXTO QUE PASE LOS TODOS index

  const handleAddTodo = $(() => {
    todoStore.todos?.push({ name: state.value });
  });

  return (
    <div>
      <input
        type="text"
        class="border border-gray-400 py-2 px-4 rounded-l"
        value={state.value}
        onInput$={(ev: any) => (state.value = ev?.target?.value)}
        placeholder="Name"
      />
      <button
        onClick$={() => handleAddTodo()}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Haz clic aquí
      </button>
      <div class="notebook">
        <div class="notebook-header">
          <h2 class="notebook-title">Mi Libreta de Notas</h2>
        </div>

        <div class="notebook-content">
          {todoStore.todos?.map((item: any) => {
            return <TodoList {...item} />;
          })}
        </div>
      </div>
    </div>
  );
});
