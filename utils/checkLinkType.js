export function checkLinkType(name) {
  var link;
  if (name === "/employer") link = "https://app.getwork.org/signup/company";
  if (name === "/students") link = "https://app.getwork.org/signup/student";
  if (name === "/college") link = "https://www.getwork.org/colleges#schedule_form";

  return link;
}
