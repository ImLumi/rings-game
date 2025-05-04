import { API_URL } from '../../constants';

export type CreateGameDto = {
  puzzles: number[];
  players: string[];
};

// {
//   "id": "345498",
//   "inviteCodes": [
//       {
//           "playerId": "6edcbf46-5723-46ee-a680-2b04177e9e9e",
//           "playerName": "Alice",
//           "inviteCode": "3454980"
//       },
//       {
//           "playerId": "8283c9cc-e0a4-42c1-8965-4627359393cd",
//           "playerName": "Bob",
//           "inviteCode": "3454981"
//       }
//   ]
// }

type CreateGameResponse = {
  id: string;
  inviteCodes: {
    playerId: string;
    playerName: string;
    inviteCode: string;
  }[];
};

export async function createGame(
  createGameDto: CreateGameDto,
): Promise<CreateGameResponse> {
  const response = await fetch(`${API_URL}/session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(createGameDto),
  });
  if (!response.ok) {
    throw new Error('Failed to create game');
  }
  return response.json();
}
