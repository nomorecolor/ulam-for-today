import { useState, useEffect } from "react";
import firebase from "../firebase-config/firebase-config";

import "firebase/firestore";
import { UlamProp } from "../interface/Ulam";

const db = firebase.firestore();

export const useUlam = (id?: string | null | undefined) => {
  const [error, setError] = useState(false);
  const [ulam, setUlam] = useState<UlamProp[]>([]);

  useEffect(() => {
    console.log(id);
    const unsubscribe =
      id != null && id !== undefined
        ? firebase
            .firestore()
            .collection("ulam")
            .doc(id)
            .onSnapshot(
              doc => {
                const result = [];
                const item: UlamProp = {
                  id: doc.id,
                  name: doc.get("name"),
                  picLink: doc.get("picLink"),
                  recipe: doc.get("recipe")
                };

                result.push(item);
                setUlam(result);
              },
              err => {
                setError(err == null);
              }
            )
        : firebase
            .firestore()
            .collection("ulam")
            .onSnapshot(
              doc => {
                const result: UlamProp[] = [];
                doc.forEach(data => {
                  const item: UlamProp = {
                    id: data.id,
                    name: data.get("name"),
                    picLink: data.get("picLink"),
                    recipe: data.get("recipe")
                  };

                  result.push(item);
                });

                setUlam(result);
              },
              err => {
                setError(err == null);
              }
            );

    return () => unsubscribe();
  }, [id]);

  return { error, ulam };
};

export const createUlam = (ulam: UlamProp) => {
  return db.collection("ulam").add(ulam);
};

export const createUlamWithId = (id: string, ulam: UlamProp) => {
  return db
    .collection("ulam")
    .doc(id)
    .set(ulam);
};

export const updateUlam = (id: string, ulam: UlamProp) => {
  return db
    .collection("ulam")
    .doc(id)
    .update(ulam);
};

export const deleteUlam = (id: string) => {
  return db
    .collection("ulam")
    .doc(id)
    .delete();
};
