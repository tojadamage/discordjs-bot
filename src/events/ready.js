module.exports = client => {
  console.log(`\nWłączony został bot: ${client.user.tag} \n\n> Jest gotowy do pracy przy ${client.users.cache.size} użytkownikach!`);
  client.user.setActivity('BonsajArts.pl', { type: 'WATCHING' })
};