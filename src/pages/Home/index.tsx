import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";

import { CtxGlogal } from "../../context/global";

export const Home = () => {
  const { data, setData } = useContext(CtxGlogal);
  const auth = getAuth();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const [todo, setTodo] = useState<string>();
  const [todos, setTodos] = useState<any[]>([]);

  // read
  useEffect(() => {
    const temp: any[] = [];
    onValue(ref(data.db), (snapshot) => {
      const dataDb: any = snapshot.val();
      if (dataDb !== null) {
        Object.values(dataDb).map((todoDb: any) => {
          temp.push(todoDb);
        });
      }
    });
    setTodos(temp);
  }, []);

  // write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(data.db, `${uuid}`), {
      uuid,
      todo,
    });

    setTodo("");
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
      <Grid container>
        <TextField
          name="groupExpertise"
          value={todo ? todo : ""}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button onClick={writeToDatabase}>Submit</Button>
      </Grid>

      <Grid container>
        {todos?.map((item) => (
          <Grid item xs={12} key={item?.uuid}>
            <Typography>{item?.todo}</Typography>
            <Button>update</Button>
            <Button>delete</Button>
          </Grid>
        ))}
      </Grid>

      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={7} textAlign="center">
          Escudo Mestre
        </Grid>

        <Grid item xs={7}>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => {
              logout();
            }}
          >
            Sign out of Escudo Mestre
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
