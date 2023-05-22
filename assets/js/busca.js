const buscaLocais = (arrayList, target, buscaId = false) => {
  if (buscaId) {
    const index = arrayList.findIndex((elemento) => elemento.id === target);
    if (index === -1) return false;
    console.log(arrayList[index]);
    return arrayList[index];
  }

  if (typeof target === "string") {
    return arrayList.filter(({ nome, pontos }) => {
      if (nome.toLowerCase().includes(target.toLowerCase())) return true;

      for (const ponto of pontos)
        if (ponto.toLowerCase().includes(target.toLowerCase())) return true;
    });
  } else {
    throw new Error("Target não é uma string");
  }
};

const buscaRestaurantes = (arrayList, target, buscaId = false) => {
  if (buscaId) {
    const index = arrayList.findIndex((elemento) => elemento.id === target);
    if (index === -1) return false;
    return arrayList[index];
  }
  if (typeof target === "string") {
    return arrayList.filter(({ nome, localizacao, pratos }) => {
      if (nome.toLowerCase().includes(target.toLowerCase())) return true;

      if (localizacao.toLowerCase().includes(target.toLowerCase())) return true;

      for (const prato of pratos)
        if (prato.toLowerCase().includes(target.toLowerCase())) return true;
    });
  } else {
    throw new Error("Target não é uma string");
  }
};

// Modelo de exemplo de um objeto para teste

// const local = {
//   fotos: [
//     "https://source.unsplash.com/random/560x400/?rio+de+janeiro",
//     "https://source.unsplash.com/random/560x400/?rio+de+janeiro",
//     "https://source.unsplash.com/random/560x400/?rio+de+janeiro",
//   ],
//   locomocao: [
//     "Metrô: o metrô do Rio de Janeiro conta com 3 linhas que cobrem diversas áreas da cidade, incluindo a zona sul, zona norte e centro.",
//     "Táxis: táxis estão disponíveis em toda a cidade e são uma opção conveniente para se locomover, especialmente em áreas sem acesso ao metrô ou ônibus.",
//     "Bicicletas: o Rio de Janeiro oferece diversas opções de compartilhamento de bicicletas, incluindo o programa Bike Rio, que permite que os usuários aluguem bicicletas por hora ou por dia.",
//     "Ônibus: os ônibus são uma opção popular de transporte na cidade, com uma grande variedade de rotas e horários disponíveis.",
//     "Uber e outros aplicativos de transporte: aplicativos de transporte como Uber, 99 e Cabify também são populares no Rio de Janeiro e oferecem uma opção mais conveniente para se locomover pela cidade.",
//     "Barcas: barcas são uma opção de transporte para quem precisa se deslocar para as cidades vizinhas, como Niterói, Paquetá e Ilha do Governador.",
//   ],
//   nome: "Rio de Janeiro",
//   pontos: [
//     "Cristo Redentor: o famoso monumento localizado no topo do Morro do Corcovado é um dos mais conhecidos cartões-postais do Brasil.",
//     "Pão de Açúcar: o complexo de montanhas localizado na entrada da Baía de Guanabara oferece uma vista panorâmica da cidade.",
//     "Copacabana e Ipanema: as praias mais famosas do Rio de Janeiro, com areias brancas e águas cristalinas.",
//     "Jardim Botânico: um dos mais belos jardins botânicos do mundo, com uma grande variedade de plantas e flores.",
//   ],
//   sobre:
//     "O Rio de Janeiro é uma cidade mundialmente conhecida por suas praias incríveis, vistas deslumbrantes e vida noturna animada. \n\nAlém disso, a cidade oferece uma rica cultura, com destaque para a música, dança e gastronomia. O turismo é uma das principais atividades econômicas da cidade, atraindo milhões de visitantes todos os anos.",
// };
