export type AggregateStats = Record<string, AggregatePlayer>;

export interface AggregatePlayer {
  readonly id: string;
  readonly name: string;
  readonly tag: string;
  readonly agent: string[];
  readonly combat: number[];
  readonly kills: number[];
  readonly deaths: number[];
  readonly assists: number[];
  readonly fk: number[];
  readonly fd: number[];
  readonly clutch: number[];
  readonly clutchv1: number[];
  readonly clutchv2: number[];
  readonly clutchv3: number[];
  readonly clutchv4: number[];
  readonly clutchv5: number[];
  readonly kast: number[];
  readonly multiKills1: number[];
  readonly multiKills2: number[];
  readonly multiKills3: number[];
  readonly multiKills4: number[];
  readonly multiKills5: number[];
  readonly hsPercent: number[];
  readonly rws: number[];
  readonly wrws: number[];
  readonly agentWeightedAcs: number[];
  readonly agentWeightedWrwcs: number[];
}

export interface PlayerData {
  readonly id: string;
  readonly name: string;
  readonly tag: string;
  readonly agent: string;
  readonly combat: number;
  readonly kills: number;
  readonly deaths: number;
  readonly assists: number;
  readonly fk: number;
  readonly fd: number;
  readonly clutch: number;
  readonly clutchv1: number;
  readonly clutchv2: number;
  readonly clutchv3: number;
  readonly clutchv4: number;
  readonly clutchv5: number;
  readonly kast: number;
  readonly multiKills1: number;
  readonly multiKills2: number;
  readonly multiKills3: number;
  readonly multiKills4: number;
  readonly multiKills5: number;
  readonly hsPercent: number;
  readonly rws: number;
  readonly wrws: number;
  readonly agentWeightedAcs: number;
  readonly agentWeightedWrwcs: number;
}

export interface TournamentPlayerData {
  readonly id: string;
  readonly name: string;
  readonly tag: string;
  readonly gamesPlayed: number;
  readonly agents: string[];
  readonly combat: number;
  readonly killsAvg: number;
  readonly killsTotal: number;
  readonly deathsAvg: number;
  readonly deathsTotal: number;
  readonly assistsAvg: number;
  readonly assistsTotal: number;
  readonly fkAvg: number;
  readonly fkTotal: number;
  readonly fdAvg: number;
  readonly fdTotal: number;
  readonly clutch: number;
  readonly clutchv1: number;
  readonly clutchv2: number;
  readonly clutchv3: number;
  readonly clutchv4: number;
  readonly clutchv5: number;
  readonly kast: number;
  readonly multiKillsAvg: number;
  readonly multiKillsTotal: number;
  readonly multiKills1: number;
  readonly multiKills2: number;
  readonly multiKills3: number;
  readonly multiKills4: number;
  readonly multiKills5: number;
  readonly hsPercent: number;
  readonly rws: number;
  readonly wrws: number;
  readonly agentWeightedAcs: number;
  readonly agentWeightedWrwcs: number;
}