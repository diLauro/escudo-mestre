import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  GiPerspectiveDiceSixFacesFive,
  GiPerspectiveDiceSixFacesFour,
  GiPerspectiveDiceSixFacesOne,
  GiPerspectiveDiceSixFacesSix,
  GiPerspectiveDiceSixFacesThree,
  GiPerspectiveDiceSixFacesTwo,
} from "react-icons/gi";

type Props = {
  size?: number;
};

export const RollingDices = ({ size = 70 }: Props) => {
  const listDices = [
    <GiPerspectiveDiceSixFacesOne size={size} />,
    <GiPerspectiveDiceSixFacesThree size={size} />,
    <GiPerspectiveDiceSixFacesTwo size={size} />,
    <GiPerspectiveDiceSixFacesFour size={size} />,
    <GiPerspectiveDiceSixFacesFive size={size} />,
    <GiPerspectiveDiceSixFacesSix size={size} />,
  ];

  const [dice, setDice] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setDice(Math.floor(Math.random() * 6));
    }, 300);
  }, []);

  return <>{listDices[dice]}</>;
};
