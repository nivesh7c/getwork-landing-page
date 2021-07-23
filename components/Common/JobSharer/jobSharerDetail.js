export const jobSharerDetail = (data) => {
  if (!data) return {};
  return {
    job_id: data?.job_id || data?.id,
    company_name: data.company ? data.company.company_name : data.company_details ? data.company_details : JSON.parse(localStorage.getItem("company"))?.company_name,
    job_title: data?.job_title,
    job_type: data?.job_type_name,
    apply_end_date: (data?.college && data?.college[0]?.apply_end_date) || data?.apply_end_date,
    job_role: data?.job_role_name,
    payment_type: data?.salary_payment_type.toLowerCase(),
    ctc_min: data?.ctc_min,
    ctc_max: data?.ctc_max,
  };
};

export const getUserDashboardHomeLink = (userType) => {
  let link = "";
  if (userType.toUpperCase() === "COLLEGE") link = "/college/dashboard";
  else if (userType.toUpperCase() === "COMPANY") link = "/company/dashboard";
  else if (userType.toUpperCase() === "STUDENT") link = "/student/dashboard";
  return link;
};

export const getIconPath = (iconName) => {
  switch (iconName) {
    case "JOB_SEGMENT":
      break;
    case "JOB_TYPE":
      break;
    case "JOB_LOCATION":
      break;
    default:
      break;
  }
};
