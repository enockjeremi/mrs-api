import { Fault } from 'src/ppus/faults/entities/fault.entity';
import { User } from './users.entity';

export class Order {
  date: Date;
  user: User;
  faults: Fault[];
}
