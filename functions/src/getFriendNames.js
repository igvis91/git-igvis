async function getFriendNames(userId) {
  const response = await fetch(`https://example.com/users/${userId}/friends`);
  const data = await response.json();
  if (!data || !Array.isArray(data.friends)) return [];
  return data.friends.map((friend) => friend.name);
}

module.exports = { getFriendNames };

