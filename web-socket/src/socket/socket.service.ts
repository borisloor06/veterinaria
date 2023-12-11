import { Injectable } from '@nestjs/common';
import { User } from 'src/guards/entities/auth.entity';

@Injectable()
export class SocketService {
  private roomClients: { [room: string]: { [socketId: string]: any } } = {};

  get getRooms(): { [room: string]: { [socketId: string]: any } } {
    return this.roomClients;
  }

  getRoomClients(room: string): any {
    return this.roomClients[room];
  }

  getRoomClient(room: string, socketId: string): any {
    return this.roomClients[room][socketId];
  }

  getRoomClientUser(room: string, socketId: string): any {
    return this.roomClients[room][socketId]?.user;
  }

  joinRoom(room: string, socketId: string, user: any): void {
    if (!this.roomClients[room]) {
      this.roomClients[room] = {};
    }

    this.roomClients[room][socketId] = { user, socketId };
  }

  joinQueue(room: string, socketId: string): void {
    const client = this.roomClients[room][socketId];
    if (client && client.user) {
      client.user.inQueue = true;
    }
  }

  callNextClient(room: string): any {

    const nextUser = Object.values(this.roomClients[room]).find(
      (client) => client.user.inQueue,
    );

    if (nextUser) {
      // Set inQueue to false for the client
      this.roomClients[room][nextUser.socketId].user.inQueue = false;

      return nextUser;
    } else {
      return null;
    }
  }

  getClientList(room: string): any[] {
    return Object.values(this.roomClients[room] || {});
  }

  removeClient(room: string, socketId: string): void {
    const user = this.roomClients[room][socketId]?.user;
    if (user) {
      delete this.roomClients[room][socketId];
    }
  }
}