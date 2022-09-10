export interface PokemonListingShape {
  name: string;
  url: string;
}

interface Sprite {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

interface SpriteAll extends Sprite {
  other: {
    dream_world: Sprite;
    home: Sprite;
    'official-artwork': Sprite;
  }
}

export interface PokemonDetailShape {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  height: number;
  id: number;
  name: string;
  sprites: SpriteAll;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  weight: number;
}
