import { client, checkError } from './client';

export async function getPictures() {
  const response = await client.from('cloud_table').select('*').order('id', { ascending: false });
  return checkError(response);
}

export async function getPicture(id) {
  const response = await client.from('cloud_table').select().match({ id }).single(); // Work from Here
  return checkError(response);
}

export async function addLike(id) {

  let liked = await client.from('cloud_table').select('liked').match({ id }).single();

  const { data, error } = await client.from('cloud_table').update({ liked: liked.data.liked + 1 })
    .match({ id }).single();

  if (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    return data;
  }
}