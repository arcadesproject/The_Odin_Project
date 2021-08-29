function sum(a, b) {
  return a + b;
}

function objectAssign(a, b) {
  const data = { one: a };
  data['two'] = b;
  return data;
}

function nullFunction(a) {
  a = null;
  return a;
}

module.exports = { sum, objectAssign, nullFunction };
