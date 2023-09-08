//Make some arrays of objects based on the schema design I created

//general stats
const pokedata = [
    { national_num: '0006', pokename: 'Charizard', poketype1: 'Fire', poketype2: 'Flying', pokespecies: '',  height: '0.8m', weight: '28.5kg', sign_ability: 'Thick Fat'}, 
    { national_num: '0184', pokename: 'Azumarill', poketype: 'Water, Fairy', pokespecies: 'Aqua Rabbit', height: '0.8m', weight: '28.5kg', sign_ability: 'Thick Fat'},
	
	{ national_num: '0182', pokename: 'Bellossom', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	
	{ national_num: '0009', pokename: 'Blastoise', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	
	{ national_num: '0012', pokename: 'Butterfree', poketype: 'Bug, Flying', pokespecies: 'Butterfly', height: '1.1m', weight: '32kg', sign_ability: 'Compound Eyes'}, 
	
	{ national_num: '0025', pokename: 'Pikachu', poketype: 'Electric', pokespecies: 'Mouse', height: '0.4m', weight: '5.8kg', sign_ability: 'Static'}, 
	{ national_num: '0052', pokename: 'Meowth', poketype: 'Normal', pokespecies: 'Scratch Cat', height: '0.4m', weight: '4.2kg', sign_ability: 'Pickup'}, 
	{ national_num: '0094', pokename: 'Gengar', poketype1: 'Ghost', poketype2: 'Poison', pokespecies: 'Shadow', height: '1.5m', weight: '40.5kg', sign_ability: 'Cursed Body'},
	{ national_num: '0068', pokename: 'Machamp', poketype: 'Fighting', pokespecies: 'Superpower', height: '1.6m', weight: '130kg', sign_ability: 'Guts'},
	{ national_num: '0099', pokename: 'Kingler', poketype: 'Water', pokespecies: 'Pincer', height: '1.3m', weight: '60kg', sign_ability: 'Hyper Cutter'}, 
	{ national_num: '0131', pokename: 'Lapras', poketype1: 'Water', poketype2: 'Ice', pokespecies: 'Transport', height: '2.5m', weight: '220kg', sign_ability: 'Water Absorb'},
	
	{ national_num: '0133', pokename: 'Eevee', poketype: 'Normal', pokespecies: 'Evolution', height: '0.4m', weight: '5.8kg', sign_ability: 'Run Away'}, 
	
	{ national_num: '0143', pokename: 'Snorlax', poketype: 'Normal', pokespecies: 'Sleeping', height: '2.1m', weight: '460.0kg', sign_ability: 'Immunity'}, 
	{ national_num: '0569', pokename: 'Garbodor', poketype: 'Poison', pokespecies: 'Trash Heap', height: '1.9m', weight: '107.3kg', sign_ability: 'Stench'}, 
	{ national_num: '0809', pokename: 'Melmetal', poketype: 'Steel', pokespecies: 'Hex Nut', height: '2.5m', weight: '800kg', sign_ability: 'Iron Fist'},
	{ national_num: '0812', pokename: 'Rillaboom', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0815', pokename: 'Cinderace', poketype: 'Fire', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0818', pokename: 'Inteleon', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0826', pokename: 'Orbeetle', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0834', pokename: 'Drednaw', poketype1: 'Water', poketype2: 'Rock', pokespecies: 'Bite', height: '1m', weight: '115kg', sign_ability: 'Strong Jaw'}, 
	{ national_num: '0839', pokename: 'Coalossal', poketype1: 'Rock', poketype2: 'Fire',  pokespecies: 'Coal', height: '2.8m', weight: '310.5kg', sign_ability: 'Steam Engine'},   
	{ national_num: '0841', pokename: 'Flapple', poketype1: 'Grass', poketype2: 'Dragon', pokespecies: 'Apple Wing', height: '0.3m', weight: '1.0kg', sign_ability: 'Ripen'},   
	{ national_num: '0842', pokename: 'Appletun', poketype1: 'Grass',  poketype2: 'Dragon', pokespecies: 'Apple Nectar', height: '0.4m', weight: '13kg', sign_ability: 'Ripen' },   
	{ national_num: '0844', pokename: 'Sandaconda', poketype: 'Ground', pokespecies: 'Sand Snake', height: '3.8m', weight: '65.5kg', sign_ability: 'Sand Spit'}, 
	{ national_num: '0849', pokename: 'Toxtricity', poketype: 'Grass', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},   
	{ national_num: '0851', pokename: 'Centiskorch', poketype1: 'Fire', poketype2: 'Bug',  pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0858', pokename: 'Hatterene', poketype1: 'Psychic', poketype2: 'Fairy',  pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0861', pokename: 'Grimmsnarl', poketype1: 'Dark', poketype2: 'Fairy', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0879', pokename: 'Copperajah', poketype: 'Steel', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll', b4g_max_image: '' },
	{ national_num: '0884', pokename: 'Duraludon', poketype1: 'Steel', poketype2: 'Dragon', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0892', pokename: 'Urshifu', poketype1: 'Fighting', poketype2: 'Dark', pokespecies: 'Flower', height: '0.4m', weight: '5.8kg', sign_ability: 'Chlorophyll'},
	{ national_num: '0869', pokename: 'Alcremie', poketype: 'Fairy', pokespecies: 'Cream', height: '0.3m', weight: '0.5kg', sign_ability: 'Sweet Veil'}, 
	{ national_num: '0973', pokename: 'Flamingo', poketype1: 'Flying', poketype2: 'Fighting', pokespecies: 'Flower', height: '1.9', weight: '105kg', sign_ability: 'Chlorophyll' }
]
   
//giga stats

const g_max =  [ 
	{ g_max_move: 'Wildfire',	pokename: 'Charizard',	g_max_move_type: 'Fire', b4g_max_image: '<img alt="Charizard" src="//archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/100px-0006Charizard.png" decoding="async" loading="lazy" width="100" height="100" srcset="//archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/150px-0006Charizard.png 1.5x, //archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/200px-0006Charizard.png 2x"></img>', post_g_max_image: '<img="alternate" media="only screen and (max-width: 720px)" href="https://m.bulbapedia.bulbagarden.net/wiki/File:0006Charizard-Gigantamax.png"i<img style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://archives.bulbagarden.net/media/upload/0/0c/0006Charizard-Gigantamax.png" width="100" height="100">', post_g_max_height: 28},
	{g_max_move: 'N/A', pokename: 'Azumarill', g_max_move_type: 'N/A', b4g_max_image:  '', post_g_max_image: 'n/a', post_g_max_height: 28},
	
	{g_max_move: 'N/A', pokename: 'Bellossom', g_max_move_type: 'N/A', b4g_max_image: 'https://archives.bulbagarden.net/wiki/File:0182Bellossom.png',  post_g_max_image: 'n/a',  post_g_max_height: 'n/a' },
	{g_max_move: 'Cannonade',	pokename: 'Blastoise',	g_max_move_type: 'Water', b4g_max_image: 'https://archives.bulbagarden.net/media/upload/0/0a/0009Blastoise.png',  post_g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0009Blastoise-Gigantamax.png',  post_g_max_height: 25},
	
	{g_max_move: 'Befuddle',	pokename: 'Butterfree',	g_max_move_type: 'Bug', b4g_max_image: '',  post_g_max_image: '<img alt="Butterfree-Gigantamax" src="110px-0012Butterfree-Gigantamax.png"',  post_g_max_height: 17 },
	{g_max_move: 'Volt Crash',	pokename: 'Pikachu',	g_max_move_type: 'Electric', b4g_max_image: 'https://archives.bulbagarden.net/media/upload/4/4a/0025Pikachu.png',  post_g_max_image: 'https://archives.bulbagarden.net/media/upload/8/8c/0025Pikachu-Gigantamax.png',  post_g_max_height: 21},
	{g_max_move: 'Gold Rush',	pokename: 'Meowth',	g_max_move_type: 'Normal',	b4g_max_image: 'https://archives.bulbagarden.net/media/upload/d/d6/0052Meowth.png',  post_g_max_image: 'https://archives.bulbagarden.net/media/upload/0/08/0052Meowth-Gigantamax.png',  post_g_max_height: 33},
	{g_max_move: 'Chi Strike',	pokename: 'Machamp', g_max_move_type: 'Fighting', b4g_max_image: 'https://archives.bulbagarden.net/media/upload/8/82/0068Machamp.png',  post_g_max_image: 'https://archives.bulbagarden.net/media/upload/e/e4/0068Machamp-Gigantamax.png', post_g_max_height: 25},
	{g_max_move: 'Terror',	pokename: 'Gengar',	g_max_move_type: 'Ghost' , b4g_max_image: 'https://archives.bulbagarden.net/media/upload/4/47/0094Gengar.png',  post_g_max_image: 'https://archives.bulbagarden.net/media/upload/4/4a/0094Gengar-Gigantamax.png', post_g_max_height: 20},
	{g_max_move: 'Foam Burst',	pokename: 'Kingler',	g_max_move_type: 'Water', b4g_max_image: '<a href="https://pokemondb.net/pokedex/kingler"><img src="https://img.pokemondb.net/sprites/home/normal/kingler.png" alt="Kingler"></a>',  post_g_max_image: '<a href="https://pokemondb.net/pokedex/kingler"><img src="https://img.pokemondb.net/sprites/home/normal/kingler-gigantamax.png" alt="Kingler"></a>', post_g_max_height: 19, g_max_move: 'Foam Burst', g_max_move_type: 'Water' },
	{g_max_move: 'Resonance',	pokename: 'Lapras',	g_max_move_type: 'Ice'	, b4g_max_image: 'https://archives.bulbagarden.net/media/upload/9/99/0131Lapras.png',  post_g_max_image: 'https://archives.bulbagarden.net/media/upload/b/b6/0131Lapras-Gigantamax.png',  post_g_max_height: 24},
	{g_max_move: 'Cuddle',	pokename: 'Eevee', g_max_move_type:	'Normal', post_g_max_image: '',   b4g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0133Eevee.png', post_g_max_height: 17, g_max_move: 'Vine Lash', g_max_move_type: '' , b4g_max_image: '',  post_g_max_image: '', g_max_move: 'Vine Lash', g_max_move_type: '' },
	{g_max_move: 'Replenish',	pokename: 'Snorlax',	g_max_move_type:	'Normal', b4g_max_image: '<a href="https://pokemondb.net/pokedex/snorlax"><img src="https://img.pokemondb.net/sprites/home/normal/snorlax.png" alt="Snorlax"></a>', post_g_max_image: '<a href="https://pokemondb.net/pokedex/snorlax"><img src="https://img.pokemondb.net/sprites/home/normal/snorlax-gigantamax.png" alt="Snorlax"></a>', post_g_max_height: 35, g_max_move: 'Replenish', g_max_move_type: 'Normal' },
	{g_max_move: 'Malodor',	pokename: 'Garbodor',	g_max_move_type: 'Poison', b4g_max_image: '<a href="https://pokemondb.net/pokedex/garbodor"><img src="https://img.pokemondb.net/sprites/home/shiny/garbodor.png" alt="Garbodor"></a>',  post_g_max_image: '<a href="https://pokemondb.net/pokedex/garbodor"><img src="https://img.pokemondb.net/sprites/home/shiny/garbodor-gigantamax.png" alt="Garbodor"></a>', post_g_max_height: 21,  g_max_move: 'Malodor', g_max_move_type: 'Poison' }  ,
	{ g_max_move: 'Meltdown',	pokename: 'Melmetal',	g_max_move_type: 'Steel',   b4g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0809Melmetal.png',   post_g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0809Melmetal-Gigantamax.png',  post_g_max_height: 25},	
	{g_max_move: 'Drum Solo',	pokename: 'Rillaboom', 	g_max_move_type: 'Grass',	 b4g_max_image: '',   post_g_max_image: '',  post_g_max_height: 17, g_max_move: 'Vine Lash', g_max_move_type: '', b4g_max_image: '',  post_g_max_image: '', post_g_max_height: 17,  },
	{g_max_move: 'Fireball',	pokename: 'Cinderace',	g_max_move_type: 'Fire',  b4g_max_image: '',    post_g_max_image: '',  post_g_max_height: 17 },
	{g_max_move: 'Hydrosnipe',	pokename: 'Inteleon', g_max_move_type: 'Water',  b4g_max_image: '',   post_g_max_image: '',  post_g_max_height: 17}, 
	{g_max_move: 'Wind Rage',	pokename: 'Corviknight',	   g_max_move_type: 'Flying',  b4g_max_image: '',   post_g_max_image: '',  post_g_max_height: 17 },
	{g_max_move: 'Gravitas',	pokename: 'Orbeetle',	g_max_move_type: 'Psychic',  b4g_max_image: '',   post_g_max_image: '',  post_g_max_height: 17 },	
	{g_max_move: 'Stonesurge',	pokename:'Drednaw', g_max_move_type: 'Water',  b4g_max_image: 'https://archives.bulbagarden.net/media/upload/8/82/0834Drednaw.png',    post_g_max_image: 'https://archives.bulbagarden.net/media/upload/a/a2/0834Drednaw-Gigantamax.png',  post_g_max_height: 24},	
	{g_max_move: 'Volcalith',	pokename: 'Coalossal',	g_max_move_type: 'Rock',  b4g_max_image: '',    post_g_max_image: '',  post_g_max_height: 17},
	{g_max_move: 'Tartness',	pokename: 'Flapple',	 g_max_move_type: 'Grass', b4g_max_image: '<a href="https://pokemondb.net/pokedex/flapple"><img src="https://img.pokemondb.net/sprites/home/shiny/flapple.png" alt="Flapple"></a>',  post_g_max_image: '<a href="https://pokemondb.net/pokedex/flapple"><img src="https://img.pokemondb.net/sprites/home/shiny/flapple-gigantamax.png" alt="Flapple"></a>',  post_g_max_height: 17},
	{g_max_move: 'Sweetness',	pokename: 'Appletun',		g_max_move_type: 'Grass',  b4g_max_image: '',    post_g_max_image: '',  post_g_max_height: 17},
	{g_max_move: 'Sandblast',	pokename: 'Sandaconda',		g_max_move_type: 'Ground',  b4g_max_image: '', 	post_g_max_image: '',  post_g_max_height: 17},
	{g_max_move: 'Stun Shock',	pokename: 'Toxtricity',		g_max_move_type: 'Electric'	,  b4g_max_image: '',  post_g_max_image: '',  post_g_max_height: 17},
	{g_max_move: 'Centiferno', pokename: 'Centiskorch',		g_max_move_type: 'Fire',  b4g_max_image: '',   post_g_max_image: '',  post_g_max_height: 17}	,
	{g_max_move: 'Smite',	pokename: 'Hatterene',		g_max_move_type: 'Fairy',  b4g_max_image: '', 	post_g_max_image: '',  post_g_max_height: 17},
	{g_max_move:' Snooze',	pokename: 'Grimmsnarl',	g_max_move_type: 'Dark',  b4g_max_image: '',  post_g_max_image: '',  post_g_max_height: 17}	,
	{g_max_move: 'Finale',	pokename: 'Alcremie',	g_max_move_type: 'Fairy', b4g_max_image: '<img src="https://archives.bulbagarden.net/media/upload/8/81/0869Alcremie.png" alt="Alcremie">',  post_g_max_image: 'img src="https://archives.bulbagarden.net/media/upload/9/93/0869Alcremie-Gigantamax.png" alt="Alcremie-Giga">',  post_g_max_height: 30},	
	{g_max_move: 'Steelsurge',	pokename: 'Copperajah',	g_max_move_type: 'Steel',  b4g_max_image: '',  post_g_max_image: '',  post_g_max_height: 17},	
	{g_max_move: 'Depletion',	pokename: 'Duraludon',	g_max_move_type: 'Dragon',  b4g_max_image: '',  post_g_max_image: '',  post_g_max_height: 17},		
	{g_max_move:' Rapid Flow',	pokename: 'Urshifu',	g_max_move_type: 'Water',  b4g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0892Urshifu-Single_Strike.png',  post_g_max_image: 'https://bulbapedia.bulbagarden.net/wiki/File:0892Urshifu-Gigantamax_Single_Strike.png',  post_g_max_height: 26}	
]
//egg types
const egg_group = [
	
	'Amorphous',
	'Bug',
	'Dragon',
	'Fairy',
	'Field',
	'Flying',
	'Grass',
	'Human-Like',
	'Mineral',
	'Monster',
	'Water 1',
	'Water 2',
	'Water 3',
	'Ditto',
	'Undiscovered'
	]

const poketype_egg = [
	{pokename: 'Butterfree', poketype: "Bug", egg_group: ''},
	{pokename: 'Grimmsnarl', poketype: "Dark", egg_group: ''},
	{pokename: 'Duraludon', poketype:"Dragon", egg_group: ''},
	{pokename: 'Pikachu', poketype:"Electric", egg_group: ''},
	{pokename: 'Alcremie', poketype: "Fairy", egg_group: ''},
	
	{pokename: 'Machamp', poketype:	"Fighting", egg_group: ''},
	{pokename: 'Centiskorch', poketype:"Fire", egg_group: ''},
	{pokename: 'Flamingo', poketype: "Flying", egg_group: ''},
	{pokename: 'Bellossom', poketype:	"Grass", egg_group: 'Grass'},
	{pokename: 'Sandaconda', poketype: "Ground", egg_group: ''},
	{pokename: 'Lapras', poketype: 	"Ice", egg_group: ''},
	{pokename: 'Meowth', poketype:	"Normal", egg_group: ''},
	{pokename: 'Hatterene', poketype:	"Psychic", egg_group: ''},
	{pokename: 'Garbodor', poketype:	  "Poison", egg_group: ''},
	{pokename: 'Coalossal', poketype:	"Rock", egg_group: 'Mineral'},
	{pokename: 'Copperajah', poketype:	 "Steel", egg_group: ''},
	{pokename: 'Drednaw', poketype:	"Water", egg_group1: 'Monster', egg_group2: 'Water1'},
	{pokename: 'Gengar', poketype:	"Ghost", egg_group: 'Amorphous'},
	{pokename: 'Melmetal', poketype: 'Steel', egg_group: 'Undiscovered'}
	

   
	
]
	


//breeding
const breeding = [
    { breeding_id: '0182-G', pokename: 'Bellossom', egg_group1: 'Grass', egg_group2: '',  gender: '50% male, 50% female', comp_parent: 'Villeplume'},
    {  breeding_id: '0045-G', pokename: 'Vileplume', egg_group: 'Grass', egg_group2: '', gender: '50% male, 50% female', comp_parent: 'Bellossom'},
	{  breeding_id: '0007-W1M', pokename: 'Squirtle', egg_group: 'Water 1, Monster', gender: '87.5% male, 12.5% female', comp_parent: 'Ludicolo'},
	{  breeding_id: '0869-AF', pokename: 'Alcremie', egg_group1: 'Amorphous', egg_group2: 'Fairy', gender: '100% female', comp_parent: 'Mimikyu'},
	{  breeding_id: '0296-H-L', pokename: 'Makuhita', egg_group: 'Human-like', gender: '75% male, 25% female', comp_parent: 'Hawlucha'},
	{  breeding_id: '0281-AH-L', pokename: 'Kirlia', egg_group1: 'Amorphous', egg_group2:'Human-like', gender: '50% male, 50% female', comp_parent: 'Gengar'},
	{  breeding_id: '0778-A', pokename: 'Mimikyu', egg_group: 'Amorphous', gender: '50% male, 50% female', comp_parent: 'Gengar, Kirlia'},
	{  breeding_id: '0094-A', pokename: 'Gengar',  egg_group: 'Amorphous', gender: '50% male, 50% female', comp_parent: 'Gallade'}, 
	{  breeding_id: '0842-DG', pokename: 'Appletun', egg_group1: 'Dragon', egg_group2: 'Grass', gender: '50% male, 50% female', comp_parent: 'Sprigatito'},
	{breeding_id: '0025-FAFI', pokename: 'Pikachu', egg_group1: 'Field', egg_group2: 'Fairy', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },

	{breeding_id: '0052-FAFI', pokename: 'Meowth', egg_group1: 'Field', egg_group2: 'Fairy', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0068-H-L', pokename: 'Machamp', egg_group: 'Human-like', gender: '75% male, 25% female', comp_parent: 'Makuhita' },
	{breeding_id: '0841-DG', pokename: 'Flapple', egg_group1: 'Dragon', egg_group2: 'Grass', gender: '50% male, 50% female', comp_parent: 'Bagon' },
	{breeding_id: '0025-FAFI', pokename: 'Hatterene', egg_group1: 'Field', egg_group2: 'Fairy', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0025-FAFI', pokename: 'Grimmsnarl', egg_group1: 'Field', egg_group2: 'Fairy', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0025-FAFI', pokename: 'Copperajah', egg_group1: 'Field', egg_group2: 'Fairy', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0025-FAFI', pokename: 'Urshifu', egg_group1: 'Undiscovered', egg_group2: 'No Eggs', gender: '87.5% male, 12.5% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0143-FAFI', pokename: 'Snorlax', egg_group: 'Monster', gender: '87.5% male, 12.5% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0099-W3', pokename: 'Kingler', egg_group: 'Water 3', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0569-M', pokename: 'Garbodor', egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Cuddle',	pokename: 'Eevee', egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Meltdown',	pokename: 'Melmetal',	egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Drum Solo',	pokename: 'Rillaboom', egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Fireball',	pokename: 'Cinderace',	egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Hydrosnipe',	pokename: 'Inteleon',egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Wind Rage',	pokename: 'Corviknight',	egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: 'Gravitas',	pokename: 'Orbeetle',	egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0834',	pokename:'Drednaw', egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },	
	{breeding_id: '0839',	pokename: 'Coalossal',egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0844',	pokename: 'Sandaconda',	egg_group1: 'Field', egg_group2: 'Dragon', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0849',	pokename: 'Toxtricity',		egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' },
	{breeding_id: '0851', pokename: 'Centiskorch', egg_group: 'Mineral', gender: '50% male, 50% female', comp_parent: 'Pachirisu' }
]

//pokemon


module.exports = { pokedata, g_max, egg_group, poketype_egg, breeding}