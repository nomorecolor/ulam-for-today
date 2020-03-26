import React, { useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./UlamPage.scss";
import { UlamCard } from "../components/Ulam/Ulam";
import { useUlam } from "../services/UlamServices";
import { Loader } from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const UlamPage: React.FC = () => {
  const { ulam } = useUlam();
  const [titleClass, setTitleClass] = useState("hidden");

  const title = "What's our ulam for today?";

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
      setTitleClass("main-wrapper shown");
    }, 1000);
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className={titleClass}>
          <h1 id="title">{title}</h1>
          {ulamTag}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UlamPage;
