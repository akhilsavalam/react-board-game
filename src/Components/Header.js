import React from "react";
import { GAME_STATE_PLAYING, GAME_STATE_WIN } from "../Constants";
const Header = ({ gameState, player }) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <div>Player {player} Turn</div>;
      case GAME_STATE_WIN:
        return <div>Player {player} Wins</div>;
      default:
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;