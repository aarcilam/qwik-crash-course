import { component$ } from "@builder.io/qwik";
import { Todos } from "./interfaces";

export const TodoList = component$(({ name }: Pick<Todos, "name">) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
});
