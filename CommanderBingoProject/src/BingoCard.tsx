import { useCallback, useEffect, useState } from "react";
import { bingoData } from "./data/cellData";
import MTGIcon from "./assets/mtgIcon.png";

type BingoTask = {
  id: number;
  bingoTask: string;
  isComplete: boolean;
};

export const BingoCard = () => {
  const data: BingoTask[] = bingoData;
  const [bingoCardGrid, setBingoCardGrid] = useState<BingoTask[]>([]);

  const generateBingoCard = useCallback(() => {
    const shuffledTasks = [...data].sort(() => Math.random() - 0.5);
    const selectedTasks = shuffledTasks.slice(0, 24);

    selectedTasks.splice(12, 0, {
      id: -1,
      bingoTask: "FREE SPACE",
      isComplete: true,
    });

    setBingoCardGrid(selectedTasks);
  }, [data]);

  useEffect(() => {
    generateBingoCard();
  }, [generateBingoCard]);

  const handleCellClick = (cardId: number) => {
    setBingoCardGrid((prevCard) =>
      prevCard.map((cell) =>
        cell.id === cardId ? { ...cell, isComplete: !cell.isComplete } : cell
      )
    );
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 small:p-0 ">
      <h1 className="text-2xl font-bold">Commander Bingo!</h1>
      <div className="grid grid-cols-5 gap-2">
        {bingoCardGrid.map((cell, index) => (
          <div
            key={index}
            className={`cursor-pointer hover:bg-[#3a3a3a] relative flex rounded-md items-center justify-center border border-gray-300 p-4 text-center text-sm font-medium h-[120px] small:h-[80px] small:leading-[10px]${
              cell.bingoTask === "FREE SPACE" ? "bg-[#3d3d3d]" : ""
            }`}
            onClick={() => handleCellClick(cell.id)}
          >
            <span className="small:text-[10px]">{cell.bingoTask}</span>
            {cell.isComplete && (
              <img
                src={MTGIcon}
                className="opacity-50 absolute size-[100px] small:size-[50px]"
              />
            )}
          </div>
        ))}
      </div>
      <div
        onClick={generateBingoCard}
        className="print:hidden cursor-pointer px-4 py-2 text-white bg-[#0e0e0e] rounded hover:bg-[#3d3d3d] transition-colors"
      >
        Generate New Card
      </div>
    </div>
  );
};
