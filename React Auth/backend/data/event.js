const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");
const { readEventFile, writeEventFile } = require("./util");

async function getAll() {
  const storedData = await readEventFile();
  if (!storedData.events) {
    throw new NotFoundError("Could not find any events.");
  }
  return storedData.events;
}

async function get(id) {
  const storedData = await readEventFile();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const event = storedData.events.find((ev) => ev.id === id);
  if (!event) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  return event;
}

async function add(data) {
  const storedData = await readEventFile();
  storedData.events.unshift({ ...data, id: generateId() });
  await writeEventFile(storedData);
}

async function replace(id, data) {
  const storedData = await readEventFile();
  if (!storedData.events || storedData.events.length === 0) {
    throw new NotFoundError("Could not find any events.");
  }

  const index = storedData.events.findIndex((ev) => ev.id === id);
  if (index < 0) {
    throw new NotFoundError("Could not find event for id " + id);
  }

  storedData.events[index] = { ...data, id };

  await writeEventFile(storedData);
}

async function remove(id) {
  const storedData = await readEventFile();
  const updatedData = storedData.events.filter((ev) => ev.id !== id);
  await writeEventFile({ ...storedData, events: updatedData });
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
