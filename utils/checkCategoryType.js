export function checkCategoryType(name) {
  var category_id;
  if (name === "students") category_id = 2;
  if (name === "company") category_id = 1;
  if (name === "college") category_id = 3;

  return category_id;
}
