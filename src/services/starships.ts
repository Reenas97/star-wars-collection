export interface Starship {
    name: string;
    imageUrl?: string;
    model?:string;
    manufacturer: string;
    starshipClass: string;

}

const starshipImageMap: { [key: string]: string } = {
  "Millennium Falcon": "https://media.gq.com/photos/5a341f18b491742d4078b7bc/1:1/w_1843,h_1843,c_limit/star-wars-millenium-falcon-is-just-fine.jpg",
  "Y-wing" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQId8GTe-Cg0Cvb2MsCZqd46V6kcOq3nx6AY1fX3pHS1etS4GRlwrnbaXxOt5r7YgV1yOE&usqp=CAU",
  "X-wing" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGBQWLBST-3krd9CTe-ume9BgIt6Hja39KegQXC3MbmEPhpls_lU4R00jQjY6uIV6JOA&usqp=CAU"
};


export const fetchStarships = async  (): Promise<Starship[]> => {
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();

    const starshipData: Starship[] = await Promise.all(
        data.results.map(async (starship: any, index: number) => {
    
          // Gera a URL da imagem para o personagem usando o índice
          const imageUrl = starshipImageMap[starship.name] || '';
    
          return {
            name: starship.name,
            imageUrl,
            model: starship.model,
            manufacturer: starship.manufacturer,
            starshipClass: starship.starship_class
          };
        })
      );
    
      return starshipData;
}
