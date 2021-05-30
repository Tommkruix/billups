const tokenKey = "system";

export async function saveGame(game) {
  let newGames = [game];
  let oldGames = JSON.parse(localStorage.getItem(tokenKey));

  newGames = [...oldGames, ...newGames];
  localStorage.setItem(tokenKey, JSON.stringify(newGames));
}

export async function getGames() {
  try {
    const games = JSON.parse(localStorage.getItem(tokenKey));

    let recentGames = Object.values(games);
    if (recentGames.length <= 10) return recentGames.reverse();

    return null;
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
