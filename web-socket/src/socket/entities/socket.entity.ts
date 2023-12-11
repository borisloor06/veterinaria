import { IncomingMessage } from 'http';
import { User } from 'src/guards/entities/auth.entity';

export interface CustomIncomingMessage extends IncomingMessage {
  user: User; // Puedes ajustar el tipo según tus necesidades
}