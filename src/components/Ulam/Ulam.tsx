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
import { Ulam, UlamDetailsProp } from "../../interface/Ulam";
import { useUlam } from "../../services/UlamServices";

export const UlamCard: React.FC<Ulam> = props => {
  const { name, picLink } = props;

  return (
    <div className="main-wrapper ulam-card">
      <strong>{name}</strong>
      <img className="main-page-pic" src={picLink} alt="ulam-pic" />
    </div>
  );
};

export const UlamList: React.FC<Ulam[]> = props => {
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
    <div className="main-wrapper">
      {ulam.map(x => {
        const { id, name, picLink, recipe } = x;

        return (
          <div key={id}>
            <h1>{name}</h1>
            <br />
            <img className="details-page-pic" src={picLink} alt="ulam-pic" />

            <section className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {recipe?.ingredients.map(ing => {
                  return <li>{ing}</li>;
                })}
              </ul>
            </section>

            <section className="steps">
              <h2>Steps</h2>
              <ul className="steps-list">
                {recipe?.steps.map(step => {
                  return (
                    <div>
                      <li className="description">
                        <i>
                          <strong>{step.description}</strong>
                        </i>
                      </li>
                      <ul className="procedures">
                        {step.procedures.map(proc => {
                          return <li>{proc}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </ul>
            </section>

            <section className="plating">
              <h2>Plating</h2>
              <p>{recipe?.plating}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};
