import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

type UseQueryDocs = {
  db: Firestore;
  table: string;
  field: string;
  value: string;
  send: boolean;
};
export function useQueryDocs<T>({
  db,
  table,
  field,
  value,
  send = false,
}: UseQueryDocs) {
  const [sendState, setSend] = useState(send);
  const [data, setData] = useState<T>();

  const tokkenRef = collection(db, table);
  const q = query(tokkenRef, where(field, "==", value));

  useEffect(() => {
    if (sendState) {
      const getPlayer = async () => {
        const dataPlayers = await getDocs(q);
        const responsePlayer: any = dataPlayers.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))[0];
        setData(responsePlayer);
      };
      getPlayer();
      setSend(false);
    }
  }, [sendState]);

  return { data, setSend };
}
