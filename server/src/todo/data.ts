export enum TodoStatus {
  PENDING = 'pending',
  PROGRESS = 'progress',
  COMPLETED = 'completed',
}

export const data: Todo[] = [
  {
    id: 'uuid1',
    title: 'Reading',
    description: 'reading my favorite book',
    status: TodoStatus.PENDING,
    created_at: new Date(),
  },
];

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  created_at: Date;
  updated_at?: Date;
}
