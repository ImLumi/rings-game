//         "id": "d96b62ae-83b9-456a-81eb-6e28e5a789ef",
//         "name": "Guest",
//         "role": "player",
//         "accessToken": null,
//         "email": null,
//         "password": null,
//         "ready": false,
//         "score": 0,
//         "createdAt": "2025-04-24T21:24:14.635Z",
//         "updatedAt": "2025-04-24T21:24:14.635Z"

export type UserDto = {
  id: string;
  name: string;
  role: 'admin' | 'player';
  accessToken: string | null;
  email: string | null;
  ready: boolean;
  score: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserDto = {
  name: string;
  email?: string;
};
