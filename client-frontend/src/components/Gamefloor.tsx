import { Observable } from '@legendapp/state';
import { use$ } from '@legendapp/state/react';
import { Circle, Image, Layer, Stage } from 'react-konva';
import { Guess, Puzzle } from '../states/game.state';
import useImage from 'use-image';

interface GamefloorProps {
  guess$?: Observable<Guess>;
  puzzle$: Observable<Puzzle>;
  solution$: Observable<Guess> | null;
  ringSize$?: Observable<number>;
  admin?: boolean;
  className?: string;
}

export default function Gamefloor({
  guess$,
  puzzle$,
  solution$,
  ringSize$,
  admin,
  className,
}: GamefloorProps) {
  const guess = use$(guess$);
  const puzzle = use$(puzzle$);
  const solution = use$(solution$);
  const ringSize = use$(ringSize$);
  const [puzzleImg] = useImage(puzzle?.url || '');
  if (!puzzle) return <>load...</>;
  return (
    <Stage width={500} height={500} className={className}>
      <Layer>
        <Image
          x={0}
          y={0}
          width={500}
          height={500}
          image={puzzleImg}
          cornerRadius={10000000000}
        />
        <Circle
          x={solution?.x}
          y={solution?.y}
          radius={solution?.size}
          fill="red"
          opacity={0.5}
          draggable={admin}
        />
        {!admin && guess$ && (
          <Circle
            x={guess?.x}
            y={guess?.y}
            onDragEnd={(e) => {
              guess$.set({
                size: ringSize || 100,
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
            radius={guess?.size}
            stroke="#FFD700"
            strokeWidth={10}
            draggable
          />
        )}
      </Layer>
    </Stage>
  );
}
