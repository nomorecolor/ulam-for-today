import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { UlamDetailsProp } from "../interface/Ulam";
import { UlamDetails } from "../components/Ulam/Ulam";
import { useParams } from "react-router";

const UlamDetailsPage: React.FC<UlamDetailsProp> = () => {
  const { id } = useParams();

  return (
    <IonPage>
      <IonContent>
        <UlamDetails id={id}></UlamDetails>
      </IonContent>
    </IonPage>
  );
};

export default UlamDetailsPage;
