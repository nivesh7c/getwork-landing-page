import { useRouter } from "next/router";
import { httpRequest } from "../../../services/request";
import { useState, useEffect } from "react";

const Post = () => {
  const router = useRouter();
  const { searchedJobs } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    const requestData = {
      service: "NIYUKTI",
      method: "GET",
      headers: {},
      endPoint: "job/public/open-jobs",
    };
    httpRequest(requestData)
      .then((res) => {
        var response = res.data.data;
        console.log("request Data", response);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return <p>Post: {searchedJobs}</p>;
};

export default Post;
