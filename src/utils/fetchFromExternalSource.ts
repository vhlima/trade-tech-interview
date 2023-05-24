export async function fetchFromFootballApi(accessToken: string, route: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(`${process.env.REACT_APP_FOOTBALL_API_URL}${route}`, {
    ...init,
    headers: {
      'x-rapidapi-key': accessToken,
      'x-rapidapi-host': 'v3.football.api-sports.io',
    }
  });

  return response;
}