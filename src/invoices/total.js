// Adds up the lines first and rounds VAT once, so long invoices are not a cent off.
function invoiceTotal(lines, vatRate) {
  const net = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  return Math.round(net * (1 + vatRate) * 100) / 100;
}
module.exports = { invoiceTotal };
