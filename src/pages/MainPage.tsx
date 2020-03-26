import React, { useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./MainPage.scss";
import { UlamCard } from "../components/Ulam/Ulam";
import { useUlam } from "../services/UlamServices";
import { Loader } from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
  const { ulam } = useUlam();
  const [display, setDisplay] = useState("hidden");

  const ulamTag =
    ulam === undefined || ulam.length === 0 ? (
      <Loader />
    ) : (
      <>
        {ulam.slice(0, 1).map(x => {
          const { id, name, picLink } = x;

          return (
            <Link
              style={{ textDecoration: "none" }}
              key={id}
              to={`/ulam-for-today/ulam-details/${id}`}
            >
              <UlamCard key={id} id={id} name={name} picLink={picLink} />
            </Link>
          );
        })}
      </>
    );

  useEffect(() => {
    setTimeout(() => {
      setDisplay("shown");
    }, 1000);
  }, []);

  return (
    <div className="main-container">
      <div id={display}>
        <h1>What's our ulam for today?</h1>
        {ulamTag}
      </div>
    </div>
  );
};

export default MainPage;
