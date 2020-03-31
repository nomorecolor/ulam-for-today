import React from "react";
import "./Ulam.scss";

import {
  IonItemSliding,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonIcon
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { UlamProp, UlamDetailsProp } from "../../interface/Ulam";
import { useUlam } from "../../services/UlamServices";

export const UlamCard: React.FC<UlamProp> = props => {
  const { name, picLink } = props;

  return (
    <div id="ulam-card">
      <img className="main-pic" src={picLink} alt="ulam-pic" />
      <h1>{name}</h1>
    </div>
  );
};

export const UlamList: React.FC<UlamProp[]> = props => {
  return (
    <>
      {props.map(x => {
        return (
          <IonItemSliding key={x.id}>
            <IonItem>
              <UlamCard
                key={x.id}
                id={x.id}
                name={x.name}
                picLink={x.picLink}
              />
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption color="danger">
                <IonIcon icon={trashOutline} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        );
      })}
      ;;
    </>
  );
};

export const UlamDetails: React.FC<UlamDetailsProp> = ({ id }) => {
  const { ulam, error } = useUlam(id);

  return (
    <div id="ulam-details" className="main-container">
      {ulam.map(x => {
        console.log(ulam);
        const { id, name, picLink, recipe } = x;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <br />
            <img className="details-page-pic" src={picLink} alt="ulam-pic" />

            <section id="ingredients-container">
              <h2>Ingredients</h2>
              <ul>
                {recipe?.ingredients.map(ing => {
                  return <li>{ing}</li>;
                })}
              </ul>
            </section>

            <section id="steps-container">
              <h2>Steps</h2>
              <ol id="steps-list">
                {recipe?.steps.map(step => {
                  return (
                    <div id="description">
                      <li>
                        <i>
                          <strong>{step.description}</strong>
                        </i>
                      </li>
                      <div id="procedures">
                        <ul>
                          {step.procedures.map(proc => {
                            return <li>{proc}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </ol>
            </section>

            <section id="plating-container">
              <h2>Plating</h2>
              <p>{recipe?.plating}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};
