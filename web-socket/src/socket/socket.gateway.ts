// socket.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SocketService } from './socket.service';
import { Logger, UseGuards } from '@nestjs/common';
import { JoinRoomDto, RoomDto } from './dto/rooms.dto';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { CustomIncomingMessage } from './entities/socket.entity';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly socketService: SocketService) {}

  get roomClients(): { [room: string]: { [socketId: string]: any } } {
    return this.socketService.getRooms;
  }

  handleConnection(socket: Socket & { request: CustomIncomingMessage }) {
    Logger.log('A user connected', 'SocketGateway');
    Logger.log(socket.id, 'SocketGateway');
  }

  handleDisconnect(socket: Socket) {
    this.handleClientDisconnect(socket);
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    client: Socket & { request: CustomIncomingMessage },
    payload: JoinRoomDto,
  ) {
    const user = client.data.user;
    const { room } = payload;
    client.join(room);
    this.socketService.joinRoom(room, client.id, user);
    // this.updateQueue(client, room);
    const clientList = this.socketService.getClientList(room);
    this.updateQueue(client, room);
    return clientList;
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('unirseCola')
  handleJoinQueue(
    client: Socket & { request: CustomIncomingMessage },
    payload: RoomDto,
  ) {
    const user = client.data.user;
    const { room } = payload;
    this.socketService.joinQueue(room, client.id);
    this.updateQueue(client, room);
  }

  @UseGuards(AuthGuard)
  @SubscribeMessage('callNextClient')
  handleCallNextClient(socket: Socket, payload: RoomDto) {
    const { room } = payload;
    const user = socket.data.user;
    if(user.is_user){
      throw new Error('No tienes permisos para llamar al siguiente cliente');
    }
    const nextUser = this.socketService.callNextClient(room);

    if (nextUser) {
      this.server.to(room).emit('nextClient', nextUser);
      this.updateQueue(socket, room);
      console.log(`Next client called in room ${room}`);
    } else {
      console.log(`No clients in the queue in room ${room}`);
    }
  }

  private updateQueue(client: Socket, room: string) {
    const clientList = this.socketService.getClientList(room);
    const sockets = clientList.map((client) => client.socketId);
    this.server.to(sockets).emit('updateQueue', clientList);
    return clientList;
  }

  private handleClientDisconnect(socket: Socket) {
    Object.keys(this.roomClients).forEach((room) => {
      if (this.roomClients[room][socket.id]) {
        const user = this.roomClients[room][socket.id].user;
        this.socketService.removeClient(room, socket.id);
        this.updateQueue(socket, room);
        console.log(`User ${user.username} disconnected from room ${room}`);
      }
    });
  }
}
