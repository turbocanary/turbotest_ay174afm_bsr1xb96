const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: use cryptographically secure random bytes for password suffix
  var suffix = crypto.randomBytes(16).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}