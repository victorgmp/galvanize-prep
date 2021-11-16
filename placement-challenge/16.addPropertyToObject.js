function addProperty(obj, key, value) {
  if (!obj[key]) {
    obj[key] = value;
  }

  return obj;
}
