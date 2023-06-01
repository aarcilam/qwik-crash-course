import { createContextId } from "@builder.io/qwik";
import { Store } from "~/components/todos/interfaces";

export const TodoContext = createContextId<Store>("todo.context");
