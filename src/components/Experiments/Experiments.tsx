import React from "react";

import data from "../../firebase-config/mock-recipe.json";
import { createUlam } from "../../services/UlamServices";
import { Ulam } from "../../interface/Ulam";
import "./Experiments.css";

export const Experiment = () => {
  const mockRecipe = (data as unknown) as Ulam;

  const handleSubmit = () => {
    createUlam(mockRecipe);
  };

  return (
    <>
      <button onClick={() => handleSubmit()}>Experiment</button>
    </>
  );
};
