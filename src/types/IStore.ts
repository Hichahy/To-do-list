export interface IStore {
  todo: {
    todoList: Array<{
      id: number;
      name: string;
    }>;
  };
}
