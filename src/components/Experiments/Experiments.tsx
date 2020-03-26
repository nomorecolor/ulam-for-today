import React from "react";

import data from "../../firebase-config/mock-recipe.json";
import { createUlam } from "../../services/UlamServices";
import { UlamProp } from "../../interface/Ulam";
import "./Experiments.css";

export const Experiment = () => {
  const mockRecipe = (data as unknown) as UlamProp;

  const handleSubmit = () => {
    createUlam(mockRecipe);
  };

  return (
    <>
      <button onClick={() => handleSubmit()}>Experiment</button>
    </>
  );
};
