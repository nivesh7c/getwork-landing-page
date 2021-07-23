export function checkLinking(name) {
  var link;
  if (name === "Student") link = "https://app.getwork.org/student/edit-profile";
  if (name === "Company") {
    if (localStorage.getItem("is_pref_filled") === "false") link = "https://app.getwork.org/company/complete-profile";
    else if (localStorage.getItem("is_pref_filled") === "true") link = "https://app.getwork.org/company/company-settings";
  }
  if (name === "College") link = "https://app.getwork.org/college/college-settings";

  return link;
}
