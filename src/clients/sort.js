function sortClients(clients) {
  return [...clients].sort((a, b) => a.name.localeCompare(b.name));
}
module.exports = { sortClients };
