import { ThemeProvider } from "@mui/material";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { config } from "./config/config";
import { CtxGlogal } from "./context/global";
import Router from "./router";
import Template from "./template";
import { theme } from "./theme";

const app = initializeApp(config.firebaseConfig);
const db = getFirestore(app);
export interface IData {
  app: FirebaseApp;
  db: Firestore;
  user?: {
    id: string;
  };
  player?: {
    name: string;
    status: string;
  };
}

export default function App() {
  const [data, setData] = useState<IData>({ app: app, db: db });

  return (
    <CtxGlogal.Provider value={{ data, setData }}>
      <ThemeProvider theme={theme}>
        <Template>
          <Router />
        </Template>
      </ThemeProvider>
    </CtxGlogal.Provider>
  );
}
