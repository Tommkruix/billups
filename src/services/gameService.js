import http from "./httpService";
import { apiUrl } from "../config.json";

const choiceApiEndpoint = `${apiUrl}/choice`;
const choicesApiEndpoint = `${apiUrl}/choices`;
const playApiEndpoint = `${apiUrl}/play`;
const randomApiEndpoint = `${apiUrl}/random`;

export function getChoices() {
  return http.get(choicesApiEndpoint);
}

export function getChoice() {
  return http.get(choiceApiEndpoint);
}

export function getRandomNumber() {
  return http.get(randomApiEndpoint);
}

export function playGame(player) {
  return http.post(playApiEndpoint, { player });
}
