import axios from "axios";
import { NIYUKTI_API } from "../constant";
import { city_arr, job_type_arr } from "./extra";

export const checkSearchString = (searchedJob, job_segment_arr, job_segment_present, job_type_present, city_present, job_segment_index) => {
  let initialFilters = {
    job_segment_id: "",
    job_type_id: "",
    emp_type_id: "",
    city_id: "",
  };
  let bodyData = {};
  let searchedList = searchedJob[0].split("-in-");
  console.log(city_present);

  console.log(searchedList);
  let jobSegmentName, cityName;
  if (searchedList.length === 2) {
    cityName = searchedList[1];
    // const searchJobParameter = searchedList[0].split("-");
    // console.log(searchJobParameter);
    // if (searchJobParameter.length === 2) {
    jobSegmentName = searchedList[0];
    initialFilters.city_id = city_present ? getCity(cityName) : "";
    initialFilters.job_type_id = job_type_present ? getJobType(searchedList[0]) : "";
    initialFilters.job_segment_id = job_segment_present ? getJobSegment(searchedList[job_segment_index], job_segment_arr) : "";

    // }
    // else if (searchJobParameter.length === 1) initialFilters.job_type_id = getJobType(searchedList[0]);
  } else if (searchedList.length === 1) {
    let searchedParam = searchedList[0];
    // console.log(searchedParam);
    // let jobType = searchedParam.pop();
    // console.log(jobType);

    // jobSegmentName = searchedParam.length > 0 ? searchedParam.join(" ") : "";
    // console.log(jobSegmentName);
    initialFilters.job_type_id = job_type_present ? getJobType(searchedParam) : "";
    initialFilters.job_segment_id = job_segment_present ? getJobSegment(searchedList[job_segment_index], job_segment_arr) : "";

    console.log(initialFilters);
  }
  //   if (cityName || jobSegmentName) {
  //     if (cityName) bodyData.city_name = cityName;
  //     if (jobSegmentName) bodyData.segment_name = jobSegmentName;
  //   }
  var str = "";
  console.log(initialFilters);
  Object.keys(initialFilters).map((item) => {
    if (initialFilters[item] !== "") str = str + `&${item}=${initialFilters[item]}`;
  });
  return str;
};

export const getJobType = (name) => {
  var id;

  job_type_arr.map((item) => {
    if (item.name === name) id = item.id;
  });
  return id;
};

export const getCity = (name) => {
  var id;

  city_arr.map((item) => {
    if (item.name === name) id = item.id;
  });
  return id;
};

export const getJobSegment = (name, job_segment_arr) => {
  var id = 0;
  var re = /,?[ ]/g;
  var subst = "-";
  if (name.includes("-job")) {
    job_segment_arr.map((item) => {
      if (item.name.toLowerCase().replace(re, subst) + "-job" === name) id = item.id;
    });
  }
  if (name.includes("-field")) {
    job_segment_arr.map((item) => {
      if (item.name.toLowerCase().replace(re, subst) + "-field" === name) id = item.id;
    });
  }
  console.log(id);
  return Number(id);
};

function checkProperties(obj) {
  for (var key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
}
