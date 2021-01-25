/**
 * This function is used to retrieve the list of users from the API.
 */
export default async function users() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
