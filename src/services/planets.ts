export interface Planet {
    name: string;
    imageUrl?: string;
}

export const fetchPlanet = async (url: string): Promise<Planet> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao buscar planeta');
    }
    const data = await response.json();
    return { name: data.name };
};

const planetImageMap: { [key: string]: string } = {
    "Tatooine": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWiusLZyb69ASJ4UwQrqxrBg6soaPKWR43vRuEe_xoI4nxJnr_aEnTjMhRItXFGo83aXI&usqp=CAU",
    "Alderaan" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJZ7Qv6b16jLCsglnD07WulSgY2R7APerbmNvkCF_vG129iPOF4BtapseWMlKN2YVTeo&usqp=CAU",
    "Yavin IV" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA_23AlUdcUzZUmREEFSiRGYKdkYnghvCumCMKOX40-f37aX3DjRBa99OxZaDj6Ew0UI&usqp=CAU"
};

export const fetchPlanets = async  (): Promise<Planet[]> => {
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();

    const planetData: Planet[] = await Promise.all(
        data.results.map(async (planet: any, index: number) => {
    
          // Gera a URL da imagem para o personagem usando o índice
          const imageUrl = planetImageMap[planet.name] || '';
    
          return {
            name: planet.name,
            imageUrl,
          };
        })
      );
    
      return planetData;
}
