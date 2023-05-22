const fileLocais = "/assets/xlsx/locais.xlsx"; // Caminho para o arquivo de planilha

async function generateLocais() {
  const locais = await fetch(fileLocais)
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      const data = new Uint8Array(buffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const objects = XLSX.utils.sheet_to_json(worksheet, {
        header: 0,
        blankrows: false,
        raw: false,
      });

      for (const index in objects) {
        objects[index].id = Number(objects[index].id);
        objects[index].fotos = [...objects[index].fotos.split(/\s*;\s*/)];
        objects[index].pontos = [...objects[index].pontos.split(/\s*;\s*/)];
        objects[index].locomocao = [
          ...objects[index].locomocao.split(/\s*;\s*/),
        ];
      }
      return objects;
    })
    .catch((error) => {
      console.error("Erro ao carregar o arquivo:", error);
    });

  return locais;
}
