import React from "react";
import { useParams } from "react-router-dom";
import SinglePageChart from "../components/SinglePageChart";
import SinglePageInfo from "../components/SinglePageInfo";

function SingleCoin() {
  const params = useParams();
  return (
    <div>
      <SinglePageInfo id={params.id} />
      <SinglePageChart id={params.id} />
    </div>
  );
}

export default SingleCoin;
