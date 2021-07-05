import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import OpenJob from "../../../components/Public_Layout/OpenJob";
import { NIYUKTI_API } from "../../../constant";
import { httpRequest } from "../../../services/request";
import { generateCsvWithoutSpacing } from "../../../utils/generateCsv";
import { useRouter } from "next/router";
import { makeStyles, Hidden } from "@material-ui/core";

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
export const getServerSideProps = async (ctx) => {
  const url = `${NIYUKTI_API}/job/public/open-jobs`;
  const filter_url = `${NIYUKTI_API}/job/public/filter/open-jobs`;
  const job_role_url = `${NIYUKTI_API}/job/role/`;

  const response = await axios.get(url);
  const filter_response = await axios.get(filter_url);
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
  const fetchData = async () => {
    var url = nextUrl ? `${nextUrl}` : `${NIYUKTI_API}/job/public/open-jobs?${checkString()}${checkSortJob()}`;

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

    Object.keys(filter_data).forEach((head) => {
      arr = filter_data[head].data.map((v) => ({
        ...v,
        isChecked: CheckIfTrue(filter_data[head].param_name, v),
      }));

      newArr[head] = {
        heading: filter_data[head].heading,
        param_name: filter_data[head].param_name,
        data: arr,
      };

      temp[filter_data[head].param_name] = CheckIfArray(filter_data[head].param_name, arr);
      // CheckIfArray(filter_data[head].param_name, arr);
    });
    temp["job_role"] = checkIfJobRoleInUrl();

    setFilterObject(temp);
    setFilterData(newArr);

    console.log(newArr);
  }, [filter_data]);

  const checkIfJobRoleInUrl = () => {
    var new_arr = [];

    Object.keys(router.query).map((item) => {
      if (item === "job_role") {
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

    Object.keys(router.query).map((item) => {
      if (item === param_name) {
        var array = router.query[item].split(",");
        const nuevo = array.map((i) => Number(i));
        console.log(nuevo);
        nuevo.map((in_int) => {
          if (obj.id === in_int) boole = true;
        });
      }
    });
    return boole;
  };

  const CheckIfArray = (param_name, array) => {
    var new_arr = [];
    array.map((item) => {
      if (item.isChecked === true) new_arr.push(item);
    });
    if (new_arr.length > 0) setFilterIsApplied(true);

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
          : (str += filterObject[head].length > 0 ? head + "=" + generateCsvWithoutSpacing(filterObject[head], "id") : "")
      );

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

  useEffect(() => {
    window.history.pushState({}, null, `/public/jobs${checkStringForUrl()}`);
  }, [searchStringMade]);

  useEffect(() => {
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= 2500) {
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
        />
      </div>
    </>
  );
}

export default index;
