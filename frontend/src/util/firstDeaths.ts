import { Player } from "../types/player";
import { Round } from "../types/round";
import { makeRoundTimeline } from "./roundTimeline";

export const calculateFirstDeaths= (players: Player[], rounds: Round[]) => {
  let firstDeaths: Record<Player["subject"], number> = {};

  players.forEach((player) => {
    firstDeaths[player.subject] = 0;
  });

  rounds.forEach((round) => {
    const timeline = makeRoundTimeline(round);

    if (timeline.length > 0) {
      firstDeaths[timeline[0].victim] += 1;
    }
  });

  return firstDeaths;
};
