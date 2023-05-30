import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { DocumentHead, server$ } from '@builder.io/qwik-city';
import { Counter } from '~/components/router-head/counter/counter';

export default component$(() => {
  // TODO PRISMA
  const actionInServer = server$(()=>{
    // TODO LLAMADO CON SERVICIO 
    console.log("yo sucedo en el servidor");
  });
  useVisibleTask$(()=>{
    // TODO ejecutar THREE.JS
    console.log("yo sucedo en el cliente");
  });
  actionInServer();

  return (
    <>
     <Counter countInitial={5} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
