import { API_URL } from '../../constants';
import { PuzzleDto } from './puzzle.interface';

export async function getPuzzle(id: number): Promise<PuzzleDto> {
  const response = await fetch(`${API_URL}/puzzle/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch puzzle');
  }
  return response.json();
}
export async function getPuzzles(): Promise<PuzzleDto[]> {
  const response = await fetch(`${API_URL}/puzzle`);
  if (!response.ok) {
    throw new Error('Failed to fetch puzzles');
  }
  return response.json();
}
export async function addPuzzle(puzzle: PuzzleDto): Promise<PuzzleDto> {
  const response = await fetch(`${API_URL}/puzzle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(puzzle),
  });
  if (!response.ok) {
    throw new Error('Failed to add puzzle');
  }
  return response.json();
}
