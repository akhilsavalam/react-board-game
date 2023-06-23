import React, { useState } from "react";
import "../Game.css";
import Header from "./Header";
import Footer from "./Footer";
import GameCircle from "./GameCircle";
import { isWinner } from "../helper";
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  NO_CIRCLES,
} from "../Constants";
const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  console.log(gameBoard);

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };
  const circleClicked = (id) => {
    console.log("circle clicked:" + id);
    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
    }
    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    console.log(gameBoard);
    console.log(currentPlayer);
  };
  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      /> 
    );
  };
  return (
    <>
      <Header gameState={gameState} player={currentPlayer} />
      <div className="gameBoard">{initBoard()}</div>
      <Footer />
    </>
  );
};
export default GameBoard; 