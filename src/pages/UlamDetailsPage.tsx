import React from "react";
import { UlamDetailsProp } from "../interface/Ulam";
import { UlamDetails } from "../components/Ulam/Ulam";
import { useParams } from "react-router";

const UlamDetailsPage: React.FC<UlamDetailsProp> = () => {
  const { id } = useParams();

  return (
    <div className="main-container">
      <UlamDetails id={id}></UlamDetails>
    </div>
  );
};

export default UlamDetailsPage;
