import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, []);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" alignItems="center" p={5}>
            <Typography variant="h4">{name}</Typography>
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              marginBottom="15px"
              sx={{
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
              }}
            >
              <Box component="img" src={sprites.front_default} width="50%" height="100%" />
              <Box component="img" src={sprites.front_female} width="50%" height="100%" />
              
              <PokemonTable pokemonData={pokemonData} />
            </Box>
            <Divider>Versão Shiny</Divider>
            <Box
               display="flex"
               alignItems="center"
               width="50%"
               marginBottom="15px"
               sx={{
                 flexDirection: {
                   xs: "column",
                   md: "row",
                 },
               }}>

                <Box component="img" src={sprites.front_shiny} width="50%" height="100%" />
                <Box component="img" src={sprites.front_shiny_female} width="50%" height="100%" />
               </Box>
              <Divider>Ataques disponiveis</Divider>
              <Box textAlign="center" marginTop="15px" flex>
                {moves.map((moveData, key) => (
                  <Chip key={key} sx={{ m: "5px" }} label={moveData.move.name} />
                ))}
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
