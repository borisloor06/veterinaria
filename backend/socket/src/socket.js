// socketConfig.js
const socketIO = require("socket.io");

function configureSocket(server) {
  const io = socketIO(server);

  // Mapping of room names to client information
  const roomClients = {};

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Client joins a specific waiting room
    socket.on("joinRoom", (room, user) => {
      socket.join(room);

      // Initialize room clients if not exists
      if (!roomClients[room]) {
        roomClients[room] = {};
      }

      // Store client information, including user data
      roomClients[room][socket.id] = { user, socketId: socket.id };

      // Send the current queue to the client
      io.to(room).emit("updateQueue", Object.values(roomClients[room]));

      console.log(`User ${user.username} joined room ${room}`);
    });

    // Client requests to join the queue
    socket.on("joinQueue", (room) => {
      const user = roomClients[room][socket.id].user;
      roomClients[room][socket.id].inQueue = true;

      io.to(room).emit("updateQueue", Object.values(roomClients[room]));

      console.log(`User ${user.username} joined the queue in room ${room}`);
    });

    // Vet calls the next client in the queue
    socket.on("callNextClient", (room) => {
      const nextUser = Object.values(roomClients[room]).find(
        (client) => client.inQueue
      )?.user;

      if (nextUser) {
        roomClients[room][socket.id].inQueue = false;
        io.to(room).emit("nextClient", nextUser);
        io.to(room).emit("updateQueue", Object.values(roomClients[room]));
        console.log(`Next client called in room ${room}`);
      } else {
        console.log(`No clients in the queue in room ${room}`);
      }
    });

    // Disconnect event
    socket.on("disconnect", () => {
      console.log("A user disconnected");

      // Find the room the client was in
      Object.keys(roomClients).forEach((room) => {
        if (roomClients[room][socket.id]) {
          const user = roomClients[room][socket.id].user;
          delete roomClients[room][socket.id];
          io.to(room).emit("updateQueue", Object.values(roomClients[room]));
          console.log(`User ${user.username} disconnected from room ${room}`);
        }
      });
    });
  });
}

module.exports = configureSocket;