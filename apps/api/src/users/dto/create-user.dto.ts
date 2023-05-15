import { Note } from '@prisma/client';

export class CreateUserDto {
  username: string;
  password: string;
  notes: Note[];
}
