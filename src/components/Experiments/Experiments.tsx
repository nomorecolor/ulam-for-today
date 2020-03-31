import React from "react";

import data from "../../firebase-config/mock-recipe.json";
import { createUlam, createUlamWithId } from "../../services/UlamServices";
import { UlamProp } from "../../interface/Ulam";
import "./Experiments.css";

const Experiment = () => {
  const mockRecipe = (data as unknown) as UlamProp;

  const handleSubmit = () => {
    console.log(mockRecipe.name.toLowerCase().replace(/ /g, "-"));
    createUlamWithId(
      mockRecipe.name.toLowerCase().replace(/ /g, "-"),
      mockRecipe
    );
  };

  return (
    <>
      <button onClick={() => handleSubmit()}>Experiment</button>
    </>
  );
};

export default Experiment;
