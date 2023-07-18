const mongoose = require('mongoose');
const User = require('../app/models/User'); // Asegúrate de importar correctamente tu modelo de usuario
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/monkey-nets", { useNewUrlParser: true });
const logger = require('../utils/logger');

const userData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
    createdAt: new Date('2022-01-01T10:00:00Z')
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'abcdef',
    createdAt: new Date('2022-02-01T14:30:00Z')
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'qwerty',
    createdAt: new Date('2022-03-15T08:30:00Z')
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: 'password123',
    createdAt: new Date('2022-04-20T14:45:00Z')
  },
  {
    name: 'Eva Anderson',
    email: 'eva@example.com',
    password: 'abcd1234',
    createdAt: new Date('2022-05-10T12:15:00Z')
  },
  {
    name: 'Michael Lee',
    email: 'michael@example.com',
    password: 'passw0rd',
    createdAt: new Date('2022-06-25T09:00:00Z')
  },
  {
    name: 'Sophia Taylor',
    email: 'sophia@example.com',
    password: '987654',
    createdAt: new Date('2022-07-05T17:30:00Z')
  },
  {
    name: 'David Johnson',
    email: 'david@example.com',
    password: 'david123',
    createdAt: new Date('2022-08-12T11:45:00Z')
  },
  {
    name: 'Emily Davis',
    email: 'emily@example.com',
    password: 'emily567',
    createdAt: new Date('2022-09-18T16:20:00Z')
  },
  {
    name: 'Henry Wilson',
    email: 'henry@example.com',
    password: 'henry789',
    createdAt: new Date('2022-10-03T13:10:00Z')
  },
  {
    name: 'Olivia Thompson',
    email: 'olivia@example.com',
    password: 'olivia12',
    createdAt: new Date('2022-11-29T19:00:00Z')
  },
  {
    name: 'William Walker',
    email: 'william@example.com',
    password: 'william34',
    createdAt: new Date('2022-12-15T10:30:00Z')
  },
  {
    name: 'Grace Wilson',
    email: 'grace@example.com',
    password: 'grace567',
    createdAt: new Date('2023-01-07T15:45:00Z')
  },
  {
    name: 'Daniel Turner',
    email: 'daniel@example.com',
    password: 'daniel90',
    createdAt: new Date('2023-02-21T12:20:00Z')
  },
  {
    name: 'Victoria White',
    email: 'victoria@example.com',
    password: 'victoria23',
    createdAt: new Date('2023-03-09T18:10:00Z')
  },
  {
    name: 'Andrew Wilson',
    email: 'andrew@example.com',
    password: 'andrew456',
    createdAt: new Date('2023-04-27T11:30:00Z')
  },
  {
    name: 'Sophie Anderson',
    email: 'sophie@example.com',
    password: 'sophie789',
    createdAt: new Date('2023-05-16T14:50:00Z')
  },
  {
    name: 'James Davis',
    email: 'james@example.com',
    password: 'james34',
    createdAt: new Date('2023-06-04T09:15:00Z')
  },
  {
    name: 'Lily Thompson',
    email: 'lily@example.com',
    password: 'lily567',
    createdAt: new Date('2023-07-22T16:40:00Z')
  },
  {
    name: 'Benjamin Martin',
    email: 'benjamin@example.com',
    password: 'benjamin12',
    createdAt: new Date('2023-08-08T13:25:00Z')
  },
  {
    name: 'Emma Wilson',
    email: 'emma@example.com',
    password: 'emma567',
    createdAt: new Date('2023-09-24T19:05:00Z')
  },
  {
    name: 'Henry Adams',
    email: 'henry@example.com',
    password: 'henry90',
    createdAt: new Date('2023-10-11T11:50:00Z')
  },
  {
    name: 'Ava Turner',
    email: 'ava@example.com',
    password: 'ava23',
    createdAt: new Date('2023-11-27T15:35:00Z')
  },
  {
    name: 'David Wilson',
    email: 'david@example.com',
    password: 'david456',
    createdAt: new Date('2023-12-14T10:40:00Z')
  },
  {
    name: 'Olivia Anderson',
    email: 'olivia@example.com',
    password: 'olivia789',
    createdAt: new Date('2024-01-05T17:15:00Z')
  },
  {
    name: 'William Thompson',
    email: 'william@example.com',
    password: 'william34',
    createdAt: new Date('2024-02-18T12:05:00Z')
  },
  {
    name: 'Grace Walker',
    email: 'grace@example.com',
    password: 'grace567',
    createdAt: new Date('2024-03-07T18:45:00Z')
  },
  {
    name: 'Daniel Wilson',
    email: 'daniel@example.com',
    password: 'daniel90',
    createdAt: new Date('2024-04-23T11:20:00Z')
  },
  {
    name: 'Victoria Turner',
    email: 'victoria@example.com',
    password: 'victoria23',
    createdAt: new Date('2024-05-12T14:55:00Z')
  },
  {
    name: 'Andrew Thompson',
    email: 'andrew@example.com',
    password: 'andrew456',
    createdAt: new Date('2024-06-02T09:25:00Z')
  }
];


async function seedUsers() {
  try {
    await User.create(userData);
    logger.info('Semilla de usuarios creada exitosamente');
  } catch (error) {
    logger.error('Error al crear la semilla de usuarios:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedUsers();
