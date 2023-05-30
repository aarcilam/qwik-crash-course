import { component$, useSignal, $, Slot } from "@builder.io/qwik";

export interface CounterProps {
  countInitial: number
}

export const Counter = component$<CounterProps>((props) => {
  const count = useSignal(props.countInitial);
  const addToCount = $((amount:number)=>{
    count.value += amount;
  });
  return (
    <div>
      <Slot></Slot>
      {count.value}
      <button onClick$={()=>addToCount(1)}>Sumar</button>
      <button onClick$={()=>addToCount(-1)}>Restar</button>
    </div>
  );
});