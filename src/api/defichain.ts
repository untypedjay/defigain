const BASE_ENDPOINT = 'https://api.defichain.io/v1';

export async function getAccount(address: string) {
  const response = await fetch(`${BASE_ENDPOINT}/getaccount?owner=${address}`);
  return response.json();
}