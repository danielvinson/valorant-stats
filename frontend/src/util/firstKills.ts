import { Player } from "../types/player";
import { Round } from "../types/round";
import { makeRoundTimeline } from "./roundTimeline";

export const calculateFirstKills = (players: Player[], rounds: Round[]) => {
  let firstKills: Record<Player["subject"], number> = {};

  players.forEach((player) => {
    firstKills[player.subject] = 0;
  });

  rounds.forEach((round) => {
    const timeline = makeRoundTimeline(round);
    if (timeline.length > 0) {
      firstKills[timeline[0].killer] += 1;
    }
  });

  return firstKills;
};
