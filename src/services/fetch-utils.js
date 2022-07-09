import { client, checkError } from './client';

export async function getPictures() {
  const response = await client.from('cloud_table').select('*');
  return checkError(response);
}

export async function getPicture(id) {
  const response = await client.from('cloud_table').select().match({ id }).single(); // Work from Here
  return checkError(response);
}

