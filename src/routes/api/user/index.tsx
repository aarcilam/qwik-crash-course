import type { RequestHandler } from '@builder.io/qwik-city';
 
// Called when the HTTP method is GET
export const onGet: RequestHandler = async (requestEvent) => { 
  requestEvent.json(200, { hello: 'world' });
 }
 
// Called when the HTTP method is POST
export const onPost: RequestHandler = async (requestEvent) => { 
  const body = await requestEvent.parseBody();
  console.log(body);
  requestEvent.json(200, { hello: 'its a post',body});
}