import {
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { DocumentHead, server$ } from "@builder.io/qwik-city";
import { Counter } from "~/components/router-head/counter/counter";
import { Store } from "~/components/todos/interfaces";
import { Todos } from "~/components/todos/todos";
// import { TodoContext } from "~/context/context";

export default component$(() => {
  // useContextProvider(TodoContext, store);
  // TODO PRISMA
  const actionInServer = server$(() => {
    // TODO LLAMADO CON SERVICIO
    console.log("yo sucedo en el servidor");
  });
  useVisibleTask$(() => {
    // TODO ejecutar THREE.JS
    console.log("yo sucedo en el cliente");
  });
  actionInServer();

  return (
    <>
      {/* <Counter countInitial={5} /> */}
      <Todos />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
