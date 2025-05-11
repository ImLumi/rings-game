import { Observable } from '@legendapp/state';
import { use$ } from '@legendapp/state/react';
import { Circle, Image, Layer, Stage } from 'react-konva';
import { Guess, Puzzle, Solution } from '../states/game.state';
import useImage from 'use-image';
import { useEffect } from 'react';

interface GamefloorProps {
  guess$?: Observable<Guess | null>;
  puzzle$: Observable<Puzzle | null>;
  solution$?: Observable<Solution | null>;
  ringSize?: number;
  admin?: boolean;
  className?: string;
  wrongGuess$?: Observable<Guess | null>;
  isMovableRing?: boolean;
}

export default function Gamefloor({
  guess$,
  puzzle$,
  solution$,
  ringSize,
  admin,
  className,
  wrongGuess$,
  isMovableRing = true,
}: GamefloorProps) {
  const guess = use$(guess$);
  const puzzle = use$(puzzle$);
  const solution = use$(solution$);
  const wrongGuess = use$(wrongGuess$);
  const [puzzleImg] = useImage(puzzle?.url || '');
  useEffect(() => {
    if (!guess$?.get())
      guess$?.set({
        x: 0,
        y: 0,
      });
  }, [guess$]);
  if (!puzzle)
    return <Stage width={500} height={500} className={className}></Stage>;
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
        {wrongGuess && (
          <Circle
            x={wrongGuess?.x}
            y={wrongGuess?.y}
            radius={ringSize}
            fill="black"
          />
        )}
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
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
            radius={ringSize}
            stroke="#FFD700"
            strokeWidth={10}
            draggable={isMovableRing}
          />
        )}
      </Layer>
    </Stage>
  );
}
