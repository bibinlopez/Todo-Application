import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { v4 as uuid } from 'uuid';
import { data, Todo } from './data';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    const { title, description, status } = createTodoDto;
    const newTodo: Todo = {
      id: uuid(),
      title,
      description,
      status,
      created_at: new Date(),
    };

    data.push(newTodo);

    const responseObj = {
      success: true,
      message: 'Todo successfully added...',
    };

    return responseObj;
  }

  findAll({ page, limit }) {
    const skip = +page || 1 * +limit || 5;
    const result = data.slice(skip, limit + skip);
    const responseObj = { success: true, data: result, count: result.length };
    return responseObj;
  }

  findOne(id: string) {
    const result = data.find((todo) => todo.id === id);
    const responseObj = { success: true, data: result };
    return responseObj;
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    const todoIndex = data.findIndex((todo) => id === todo.id);
    if (todoIndex === -1) {
      throw new NotFoundException('No Todo item found');
    }
    data[todoIndex] = {
      ...data[todoIndex],
      ...updateTodoDto,
      updated_at: new Date(),
    };
    const responseObj = {
      success: true,
      message: 'Todo successfully updated...',
    };

    return responseObj;
  }

  remove(id: string) {
    const todoIndex = data.findIndex((todo) => id === todo.id);
    if (todoIndex === -1) {
      throw new NotFoundException('No Todo item found');
    }
    data.splice(todoIndex, 1);
    return;
  }
}
