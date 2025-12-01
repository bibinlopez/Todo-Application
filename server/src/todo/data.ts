export enum TodoStatus {
  PENDING = 'pending',
  INPROGRESS = 'inprogress',
  COMPLETED = 'completed',
}

export const data: Data = {
  todo: [
    {
      id: 'uuid1',
      title: 'Reading',
      desciption: 'reading my favorite book',
      created_at: new Date(),
      updated_at: new Date(),
      status: TodoStatus.PENDING,
    },
  ],
};

interface Data {
  todo: {
    id: string;
    title: string;
    desciption: string;
    created_at: Date;
    updated_at: Date;
    status: TodoStatus;
  }[];
}
