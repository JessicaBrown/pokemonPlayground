export const pokemon = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
 const pokemon2 = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
            ]
	 const Poke_Img_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
     //(num <= 999 ? `00${num}`.slice(-3) : num);
        pokemon2.map(p=>(p.id <= 999 ? `00${p.id}`.slice(-3) : p.id))
        export const imgSrc = `${Poke_Img_API}${pokemon2.id}.png`;

        console.log(imgSrc)
// run this through befor exprot map to add imgsrc 
// [
// 	{ "id": 4, "name": "Charmander", "type": "fire", "base_experience": 62 },
// 	{ "id": 7, "name": "Squirtle", "type": "water", "base_experience": 63 },
// 	{ "id": 11, "name": "Metapod", "type": "bug", "base_experience": 72 },
// 	{ "id": 12, "name": "Butterfree", "type": "flying", "base_experience": 178 },
// 	{ "id": 25, "name": "Pikachu", "type": "electric", "base_experience": 112 },
// 	{ "id": 39, "name": "Jigglypuff", "type": "normal", "base_experience": 95 },
// 	{ "id": 94, "name": "Gengar", "type": "poison", "base_experience": 225 },
// 	{ "id": 133, "name": "Eevee", "type": "normal", "base_experience": 65 }
// ]
