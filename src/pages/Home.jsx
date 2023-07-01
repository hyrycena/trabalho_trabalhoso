import { Box, Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/infos");
  };

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {currentPokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination
            count={Math.ceil(pokemons.length / pokemonsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Container>
    </div>
  );
};