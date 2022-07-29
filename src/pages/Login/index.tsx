import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CtxGlogal } from "../../context/global";
import { BsGoogle } from "react-icons/bs";

export type Player = {
  id: string;
  key: string;
  nickname: string;
  idUser?: string;
  status?: string;
};
export const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { key } = useParams();
  const [authing, setAuthing] = useState(false);
  const { data, setData } = useContext(CtxGlogal);
  const [dataPlayer, setDataPlayer] = useState<Player | null>(null);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        localStorage.setItem("key", JSON.stringify(response.user.uid));
        if (!dataPlayer?.idUser) {
          const updatePlayer = async (id: string) => {
            const playerUpdate = doc(data.db, "players", id);
            const newFields = {
              ...dataPlayer,
              idUser: 603 + response.user.uid,
              status: "Incompleto",
            };
            await updateDoc(playerUpdate, newFields);
          };
          updatePlayer(dataPlayer?.id!);
        }
        setData({ ...data, user: { id: response.user.uid } });
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        setAuthing(false);
      });
  };

  useEffect(() => {
    if (key) {
      const tokkenRef = collection(data.db, "players");
      const q = query(
        tokkenRef,
        where("key", "==", "8c83bdbc-0d3d-11ed-861d-0242ac120002")
      );

      const getPlayer = async () => {
        const dataPlayers = await getDocs(q);
        const responsePlayer: any = dataPlayers.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))[0];
        setDataPlayer(responsePlayer);
        setData({
          ...data,
          player: {
            name: responsePlayer?.nickname,
            status: responsePlayer?.status,
          },
        });
      };
      getPlayer();
    }
  }, []);

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
        <Grid item xs={7}>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Olá
            <Typography
              variant="h3"
              component="span"
              color="secondary"
              fontWeight="bold"
            >
              {data?.player?.name && ` ${data?.player?.name}`}
            </Typography>
            !
          </Typography>
          <Typography variant="h5" component="h1">
            Faça o login com uma conta google para continuar.
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => {
              signInWithGoogle();
            }}
            disabled={authing}
          >
            <BsGoogle size={22} style={{ marginRight: 10 }} /> Entrar com
            Google!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
