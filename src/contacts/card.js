function contactCard(c) {
  return [c.name, c.email, c.phone].filter(Boolean).join(', ');
}
module.exports = { contactCard };
