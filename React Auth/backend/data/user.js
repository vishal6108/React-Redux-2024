const { v4: generateId } = require("uuid");
const { hash } = require("bcryptjs");
const { readEventFile, writeEventFile } = require("./util");
const { NotFoundError } = require("../util/errors");

async function add(data) {
  const storedData = await readEventFile();
  const userId = generateId();
  const hashedPw = await hash(data.password, 12);
  if (!storedData.users) {
    storedData.users = [];
  }
  storedData.users.push({ ...data, password: hashedPw, id: userId });
  await writeEventFile(storedData);
  return { id: userId, email: data.email };
}

async function get(email) {
  const storedData = await readEventFile();
  if (!storedData.users || storedData.users.length === 0) {
    throw new NotFoundError("Could not find any users.");
  }

  const user = storedData.users.find((ev) => ev.email === email);
  if (!user) {
    throw new NotFoundError("Could not find user for email " + email);
  }

  return user;
}

exports.add = add;
exports.get = get;
