const tokenKey = "system";
const lastTenGames = 10;

export async function saveGame(game) {
  let newGames = [game];
  let oldGames = JSON.parse(localStorage.getItem(tokenKey));
  oldGames = oldGames ? oldGames : [];

  newGames = [...oldGames, ...newGames];
  localStorage.setItem(tokenKey, JSON.stringify(newGames));
}

export async function getGames() {
  try {
    const data = JSON.parse(localStorage.getItem(tokenKey));
    const games = Object.values(data);

    return games.reverse().slice(0, lastTenGames);
  } catch (ex) {
    return null;
  }
}

export function resetGames() {
  localStorage.removeItem(tokenKey);
}

const system = {
  getGames,
  saveGame,
  resetGames,
};

export default system;
