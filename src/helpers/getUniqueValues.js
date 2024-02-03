const getUniqueValues = (teachers, key) => {
  const uniqueValuesSet = new Set();

  teachers.forEach((item) => {
    const value = item[key];

    if (Array.isArray(value)) {
      value.forEach((item) => uniqueValuesSet.add(item));
    } else if (typeof value === "string" || typeof value === "number") {
      uniqueValuesSet.add(value);
    }
  });

  const sortedValues = Array.from(uniqueValuesSet).sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    } else {
      return a - b;
    }
  });

  return sortedValues;
};

export default getUniqueValues;
