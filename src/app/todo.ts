export class Todo {
  id: number;
  name: string;
  completed: Boolean = false;
  creation: Date = new Date();
  updated: Date = null;
}
