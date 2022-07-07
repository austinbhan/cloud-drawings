import { client, checkError } from './client';

export async function getPictures() {
  const response = await client.from('cloud_table').select('*');
  return checkError(response);
}