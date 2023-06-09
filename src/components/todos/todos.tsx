import { $, component$, useContext } from "@builder.io/qwik";
import { TodoList } from "./todoList";
import { TodoContext } from "~/context";
import { z } from "@builder.io/qwik-city";
import { SubmitHandler, formAction$, useForm, zodForm$ } from "@modular-forms/qwik";
import { useFormLoader } from "~/routes";

const addTodoSchema = z.object({
  name: z
    .string()
    .min(1, 'Please enter something.')
});
 
export type TodoForm = z.infer<typeof addTodoSchema>;

export const useFormAction = formAction$<TodoForm>((values) => {
  // Runs on server
  console.log(values);
}, zodForm$(addTodoSchema));

export const Todos = component$(() => {
  const [todoForm, { Form, Field }] = useForm<TodoForm>({
    loader: useFormLoader(),
    action: useFormAction(), // solo server
    validate: zodForm$(addTodoSchema),
  });

  const todoStore = useContext(TodoContext);

  const handleAddTodo: SubmitHandler<TodoForm> = $((values, event) => {
    // Runs on client
    todoStore.todos?.push({ name: values.name });
  });

  return (
    <div>
      <Form onSubmit$={handleAddTodo}>
          <Field name="name">
            {(field, props) => (
              <div>                  
              <div class="flex">
                <div class="">
                    <input 
                      class="border border-gray-400 py-2 px-4 rounded-l" 
                      {...props} 
                      type="text" 
                      value={field.value} 
                    />
                </div>
                <input 
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                  type="submit" 
                  value='Haz clic aquí' 
                />
              </div>
              {field.error && <div>{field.error}</div>}
              </div>
            )}
          </Field>
      </Form>
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
