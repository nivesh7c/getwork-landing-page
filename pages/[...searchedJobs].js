import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import OpenJob from "../components/Public_Layout/OpenJob";
import { NIYUKTI_API } from "../constant";
import { httpRequest } from "../services/request";
import { generateCsvWithoutSpacing } from "../utils/generateCsv";
import { useRouter } from "next/router";
import { makeStyles, Hidden } from "@material-ui/core";
import { uniqueArray } from "../utils/uniqueArray";
import { checkSearchString, getCity, getJobSegment, getJobType } from "../utils/jobSearchFunctions";
import { city_arr, job_type_arr } from "../utils/extra";

const useStyles = makeStyles({
  mainComponent: {
    marginTop: "5%",
  },
  "@media only screen and (max-width: 1900px)": {
    mainComponent: {
      marginTop: "4%",
    },
  },

  "@media only screen and (max-width: 1700px)": {
    mainComponent: {
      marginTop: "4%",
    },
  },
  "@media only screen and (max-width: 1600px)": {
    mainComponent: {
      marginTop: "5%",
    },
  },
});

export const getStaticPaths = async () => {
  const filter_url = `${NIYUKTI_API}job/public/filter/open-jobs`;
  const filter_response = await axios.get(filter_url);
  var job_segment_arr = filter_response.data.data.job_segment.data;
  var arr = [];
  var arr_inside = [];
  job_type_arr.map((item) => {
    arr.push({
      params: {
        searchedJobs: [item.name],
      },
    });
    city_arr.map((item2) =>
      arr.push({
        params: {
          searchedJobs: [item.name + "-in-" + item2.name],
        },
      })
    );
  });
  job_type_arr.map((item) => {
    job_segment_arr.map((item3) =>
      arr.push({
        params: {
          searchedJobs: [item.name + "-in-" + item3.name.toLowerCase().replace(re, subst) + "-field"],
        },
      })
    );
  });

  var re = /,?[ ]/g;
  var subst = "-";

  job_segment_arr.map((item) => {
    console.log(item.name.toLowerCase().replace(re, subst) + "-job");
    arr.push({
      params: {
        searchedJobs: [item.name.toLowerCase().replace(re, subst) + "-job"],
      },
    });
    city_arr.map((item2) =>
      arr.push({
        params: {
          searchedJobs: [item.name.toLowerCase().replace(re, subst) + "-job-in-" + item2.name],
        },
      })
    );
  });

  console.log(arr);

  // const paths = [{ params: { searchedJobs: ["internships", "internships-in-delhi"] } }, { params: { searchedJobs: ["internships"] } }];
  const paths = arr;
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const filter_url = `${NIYUKTI_API}job/public/filter/open-jobs`;
  const filter_response = await axios.get(filter_url);
  var job_segment_arr = filter_response.data.data.job_segment.data;
  let filters;
  console.log("new", context.params.searchedJobs);
  if (context.params.searchedJobs[0].includes("-job") && !context.params.searchedJobs[0].includes("full-time-jobs")) {
    console.log(context.params.searchedJobs[0].includes("-job"));

    filters = checkSearchString(context.params.searchedJobs, job_segment_arr, true, false, true, 0);
  } else if (context.params.searchedJobs[0].includes("-field")) {
    filters = checkSearchString(context.params.searchedJobs, job_segment_arr, true, true, false, 1);
  } else filters = checkSearchString(context.params.searchedJobs, [], false, true, true);

  console.log(filters);

  const url = `${NIYUKTI_API}job/public/open-jobs?ppo=0${filters}`;
  console.log(url);
  const job_role_url = `${NIYUKTI_API}job/role/`;

  const response = await axios.get(url);
  const job_role_response = await axios.get(job_role_url);

  return {
    props: {
      data: response.data.data,
      filter_data: filter_response.data.data,
      job_role_list: job_role_response.data.data,
    },
  };
};

function index({ data, filter_data, job_role_list }) {
  const classes = useStyles();
  const router = useRouter();
  console.log(router.query);
  const [nextUrl, setNextUrl] = useState(data?.next ? data.next : null);
  const [end, setEnd] = useState(data?.next ? false : true);
  console.log(filter_data);
  const [jobData, setJobData] = useState(data?.results);
  const [paginationButtonClicked, setPaginationButtonClicked] = useState(false);
  const [filterObject, setFilterObject] = useState();
  const [filterData, setFilterData] = useState();
  const [searchString, setSearchString] = useState();
  const [filterIsApplied, setFilterIsApplied] = useState(false);
  const [applyButtonClicked, setApplyButtonClicked] = useState(false);
  const [searchStringMade, setSearchStringMade] = useState(false);
  const [openFixFilter, setOpenFixFilter] = useState(false);
  const [sortBy, setSortBy] = useState({ name: "Recommended for you", value: "recommended" });
  const [listData, setListData] = useState({});

  const checkIfSalary = () => {
    var boole = 0;
    Object.keys(router.query).map((item) => {
      if (item === "ctc_min") {
        boole = router.query[item];
      }
    });
    return boole;
  };
  const [salary, setSalary] = useState(checkIfSalary());
  const checkIfPPOTrue = () => {
    var boole = false;
    Object.keys(router.query).map((item) => {
      if (item === "ppo" && Number(router.query[item]) === 1) {
        boole = true;
      }
    });
    return boole;
  };

  const [ppo, setPPO] = useState(checkIfPPOTrue());

  const checkString = () => {
    if (searchString) return `&${searchString}`;
    else return "";
  };
  const checkStringForUrl = () => {
    if (searchString) return `/?${searchString}`;
    else return "";
  };

  const checkSortJob = () => {
    if (sortBy) return `&sort_by=${sortBy.value}`;
    else return "";
  };

  const checkSalary = () => {
    if (salary && salary !== 0) return `&ctc_min=${salary}`;
    else return "";
  };
  const fetchData = async () => {
    var url = nextUrl ? `${nextUrl}` : `${NIYUKTI_API}job/public/open-jobs?${checkString()}${checkSortJob()}${checkSalary()}`;

    const res = await axios.get(url);
    console.log(res.data.data);
    var response = res.data;
    if (response.success) {
      if (response.data.next) {
        setNextUrl(response.data.next);
      } else {
        setEnd(true);
      }
      setPaginationButtonClicked(false);
      setFilterIsApplied(false);
      setApplyButtonClicked(false);
      setSearchStringMade(false);
    }

    return setJobData([...jobData, ...response.data.results]);
  };

  // const fetchFilterData = async () => {
  //   var url = `${NIYUKTI_API}/job/public/filter/open-jobs?${checkString()}`;

  //   const res = await axios.get(url);
  //   console.log(res.data.data);
  //   var response = res.data;
  //   if (response.success) {
  //   }

  //   return setFilterData(response.data);
  // };
  useEffect(() => {
    if (paginationButtonClicked) {
      fetchData();
    }
  }, [paginationButtonClicked]);

  useEffect(() => {
    var newArr = {};
    var temp = {};
    var arr = [];
    var obj = {};

    Object.keys(filter_data).forEach((head) => {
      arr = filter_data[head].data.map((v) => ({
        ...v,
        isChecked: CheckIfTrue(filter_data[head].param_name, v),
      }));

      newArr[head] = {
        heading: filter_data[head].heading,
        param_name: filter_data[head].param_name,
        data: arr,
        field_type: filter_data[head].field_type,
      };
      if (head !== "salary" && head !== "ppo") {
        temp[filter_data[head].param_name] = CheckIfArray(filter_data[head].param_name, arr);
        // CheckIfArray(filter_data[head].param_name, arr);
        let temp_new = arr.filter((data) => data.isChecked === true);
        var sum_arr = [...arr.slice(0, 5), ...temp_new];
        var arr_find = uniqueArray(sum_arr);
        console.log(arr_find);
        obj[head] = arr_find;
      }
    });
    temp["job_role_id"] = checkIfJobRoleInUrl();

    setFilterObject(temp);
    console.log(temp);
    setFilterData(newArr);
    setListData(obj);

    console.log(newArr);
  }, [filter_data]);

  const checkIfJobRoleInUrl = () => {
    var new_arr = [];

    Object.keys(router.query).map((item) => {
      if (item === "job_role_id") {
        var array = router.query[item].split(",");
        const nuevo = array.map((i) => Number(i));
        console.log(nuevo);
        nuevo.map((in_int) => {
          job_role_list.map((list) => {
            if (in_int === list.id) new_arr.push({ id: list.id, name: list.job_role_name });
          });
        });
      }
    });
    return new_arr;
  };

  const CheckIfTrue = (param_name, obj) => {
    var boole = false;

    // Object.keys(router.query).map((item) => {
    //   if (item === param_name) {
    //     var array = router.query[item].split(",");
    //     const nuevo = array.map((i) => Number(i));
    //     console.log(nuevo);
    //     nuevo.map((in_int) => {
    //       if (obj.id === in_int) boole = true;
    //     });
    //   }
    // });
    var query_param = router.query.searchedJobs[0].split("-in-");
    console.log(query_param);
    if (param_name === "job_type_id") {
      if (getJobType(query_param[0]) === obj.id) {
        boole = true;
      }
    }

    if (param_name === "job_segment_id") {
      if ((query_param[0] === "internships" || query_param[0] === "full-time-jobs") && query_param.length === 2) {
        if (getJobSegment(query_param[1], filter_data.job_segment.data) === obj.id) {
          boole = true;
        }
      } else {
        if (query_param[0] !== "internships" && query_param[0] !== "full-time-jobs" && getJobSegment(query_param[0], filter_data.job_segment.data) === obj.id) {
          boole = true;
        }
      }
    }

    if (param_name === "city_id" && query_param.length === 2) {
      if (getCity(query_param[1]) === obj.id) {
        boole = true;
      }
    }

    return boole;
  };

  const CheckIfArray = (param_name, array) => {
    var new_arr = [];
    array.map((item) => {
      if (item.isChecked === true) new_arr.push(item);
    });
    // if (new_arr.length > 0) setFilterIsApplied(true);

    return new_arr;
  };

  useEffect(() => {
    console.log(filterIsApplied);
    if (filterIsApplied) {
      let str = "";
      var count = 0;

      Object.keys(filterObject).forEach((head, index) =>
        Object.keys(filterObject).indexOf(head) !== Object.keys(filterObject).length - 1
          ? (str += filterObject[head].length > 0 ? head + "=" + generateCsvWithoutSpacing(filterObject[head], "id") + "&" : "")
          : (str += filterObject[head].length > 0 ? head + "=" + generateCsvWithoutSpacing(filterObject[head], "id") + "&" : "")
      );
      str += `ppo=${ppo ? 1 : 0}&`;
      setSearchString(str);
      setSearchStringMade(true);
      console.log(str);
      setJobData([]);
      setNextUrl(null);
      setEnd(false);
    }
  }, [filterIsApplied]);

  useEffect(() => {
    if (searchString !== undefined && searchStringMade) {
      fetchData();
    }
  }, [searchStringMade]);

  // useEffect(() => {
  //   window.history.pushState({}, null, `/public/jobs${checkStringForUrl()}${checkSalary()}`);
  // }, [searchStringMade]);

  useEffect(() => {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= 2500 && window.innerHeight + window.scrollY <= document.body.offsetHeight - 300) {
        setOpenFixFilter(true);
      } else {
        setOpenFixFilter(false);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>GetWork</title>
        <link rel="icon" href="/img/getwork-logo.png" />
        <meta name="description" content="Development " />
      </Head>
      <div className={classes.mainComponent}>
        <OpenJob
          data={jobData}
          setPaginationButtonClicked={setPaginationButtonClicked}
          paginationButtonClicked={paginationButtonClicked}
          end={end}
          filterData={filterData}
          filterObject={filterObject}
          setFilterData={setFilterData}
          setFilterObject={setFilterObject}
          setFilterIsApplied={setFilterIsApplied}
          filterIsApplied={filterIsApplied}
          applyButtonClicked={applyButtonClicked}
          setApplyButtonClicked={setApplyButtonClicked}
          openFixFilter={openFixFilter}
          setOpenFixFilter={setOpenFixFilter}
          jobRoleList={job_role_list}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPPO={setPPO}
          ppo={ppo}
          salary={salary}
          setSalary={setSalary}
          listData={listData}
          setListData={setListData}
        />
      </div>
    </>
  );
}

export default index;
