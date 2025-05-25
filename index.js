async function buscarPokemon() {
  const input = document.getElementById("pokemonInput").value.trim();
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.innerHTML = "Por favor, digite um nome ou ID.";
    return;
  }

  try {
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
    );

    if (!resposta.ok) {
      resultado.innerHTML = "Pokémon não encontrado.";
      return;
    }

    const dados = await resposta.json();

    resultado.innerHTML = `
      <h2>${dados.name} (#${dados.id})</h2>
      <img src="${dados.sprites.front_default}" alt="${dados.name}">
      <p><strong>Tipos:</strong> ${dados.types
        .map((t) => t.type.name)
        .join(", ")}</p>
    `;

  } catch (erro) {
    resultado.innerHTML = "Erro ao buscar Pokémon.";
  }
}
