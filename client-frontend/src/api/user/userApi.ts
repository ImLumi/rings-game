import { API_URL } from '../../constants';
import { CreateUserDto, UserDto } from './user.interface';

export async function getUsers(): Promise<UserDto[]> {
  const response = await fetch(`${API_URL}/user`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function getUser(id: string): Promise<UserDto> {
  const response = await fetch(`${API_URL}/user/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  return response.json();
}

export async function addUser(user: CreateUserDto): Promise<UserDto> {
  const response = await fetch(`${API_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to add user');
  }
  return response.json();
}
