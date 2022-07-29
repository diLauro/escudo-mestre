import { Container, Grid } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CtxGlogal } from "../../context/global";
import { useQueryDocs } from "../../hook/useQueryDocks";
import { FirstAccess } from "../FirstAccess";
import { Player } from "../Login";

export const Home = () => {
  const { data, setData } = useContext(CtxGlogal);
  const auth = getAuth();
  const navigate = useNavigate();

  const key: string = `${localStorage.getItem("key")}`;

  const { data: dataPlayer, setSend } = useQueryDocs<Player>({
    db: data.db,
    table: "players",
    field: "idUser",
    value: key.replaceAll('"', "")!,
    // value: "603SSD8pfjvMdNCcGXhGbFCwelCE5K2",
    send: true,
  });

  console.log(dataPlayer)

  // useEffect(() => {
  //   const getExpertise = async () => {
  //     const dataUsers = await getDocs(usersRef);
  //     console.log("aa", dataUsers.query.firestore);
  //     console.log(
  //       dataUsers.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   };

  //   getExpertise();
  // }, []);

  // const collectionRef = collection(data.db, "sheets");
  // useEffect(() => {
  //   const getExpertise = async () => {
  //     const dataExpertise = await getDocs(collectionRef);
  //     console.log(
  //       dataExpertise.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //     );
  //   };

  //   getExpertise();
  // }, []);

  // useEffect(() => {

  //   const createDocs = async () => {
  //     const expertise = await addDoc(collectionRef,
  //       {
  //         sheets: [
  //           {
  //             nivel: 1,
  //             atributes: [
  //               {
  //                 dex: 10,
  //                 agi: 10,
  //                 con: 10,
  //                 fr: 10,
  //                 int: 10,
  //                 will: 10,
  //                 per: 10,
  //                 car: 10,
  //               },
  //             ],
  //           }
  //         ]
  //       }

  //     );
  //     // console.log(expertise);
  //   };

  //   createDocs()
  // }, []);

  // useEffect(() => {

  //   const table = "hanson"

  //   const createSetDocs = async () => {
  //     const newDocs = doc(data.db, table, "aaa");
  //     await  setDoc(newDocs, {nome: "teste"})
  //   };

  //   const deleteExpertise = async (id: string) => {
  //     const expertiseDelete = doc(data.db, table, "aaa");
  //     await deleteDoc(expertiseDelete);
  //   };

  //   createSetDocs()
  //   deleteExpertise()
  // }, []);

  // useEffect(() => {
  //   const deleteExpertise = async (id: string) => {
  //     const expertiseDelete = doc(data.db, "expertise", id);
  //     await deleteDoc(expertiseDelete);
  //   };
  //   // deleteExpertise("p9ZO4FLdxwQt5vhwQIs3")
  // }, []);

  // useEffect(() => {
  //   const updateExpertise = async (id: string) => {
  //     const expertiseUpdate = doc(data.db, "expertise", id);
  //     const newFields = { expertise: "Treinamento de Animais" };
  //     await updateDoc(expertiseUpdate, newFields);
  //   };
  //   // updateExpertise("biW0XM5BuqXBG815x3xy")
  // }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItens: "center",
        flexDirection: "column",
      }}
    >
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={7} textAlign="center">
          {dataPlayer?.status && <FirstAccess />}
        </Grid>
      </Grid>
    </Container>
  );
};
