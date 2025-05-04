import { useState } from 'react';
import { LiaClipboardCheckSolid, LiaClipboardSolid } from 'react-icons/lia';

export default function ClipboardBox({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [isClipped, setIsClipped] = useState(false);

  const handleClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsClipped(true);
      setTimeout(() => {
        setIsClipped(false);
      }, 2000);
    });
  };

  return (
    <span
      className={
        className
          ? className
          : 'ms-1 inline-flex items-center rounded-md bg-amber-100 px-2 py-1 text-nowrap text-black'
      }
    >
      {text}
      {isClipped ? (
        <span
          className="cursor-pointer text-green-900 hover:scale-105"
          onClick={handleClipboard}
        >
          <LiaClipboardCheckSolid size={30} className="inline ps-2" />
        </span>
      ) : (
        <span
          className="cursor-pointer text-gray-700 hover:scale-105"
          onClick={handleClipboard}
        >
          <LiaClipboardSolid size={30} className="inline ps-2" />
        </span>
      )}
    </span>
  );
}
