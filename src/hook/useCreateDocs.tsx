import {
  addDoc,
  collection,
  DocumentReference,
  Firestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function useCreateDocs<T>(db: Firestore, table: string) {
  const [sendCreator, setSendCreator] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [docCreator, setDocCreator] = useState<T | any>(null);
  const [infoCreator, setInfoCreator] = useState<DocumentReference<any>>();

  const tableRef = collection(db, table);

  useEffect(() => {
    if (sendCreator && docCreator) {
      setIsLoading(true);

      const createDocs = async () => {
        const docSend = await addDoc(tableRef, docCreator);
        setInfoCreator(docSend);
      };
      createDocs();
      setSendCreator(false);
    }
    setIsLoading(false);
  }, [sendCreator]);

  return { docCreator, setDocCreator, infoCreator, isLoading, setSendCreator };
}
