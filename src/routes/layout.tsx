import {
  component$,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { Store } from "~/components/todos/interfaces";
import { TodoContext } from "~/context";

export default component$(() => {
  const store = useStore<Store>({
    todos: [],
  });

  useContextProvider(TodoContext, store);
  return <Slot />;
});
