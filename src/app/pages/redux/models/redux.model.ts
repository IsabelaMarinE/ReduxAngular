export interface characters {
  results:Array<character>
}

export interface character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: origin,
  location: locationcharacter,
  image: string,
  episode: Array<any>,
  url: string,
  created: string
}

export interface origin {
  name: string,
  url: string
}

export interface locationcharacter {
  name: string,
  url: string
}

export interface locations {
  results: Array<location>
}

export interface location {
  id: number,
  name: string,
  type: string,
  dimension: string,
  resident: Array<any>,
  url: string,
  created: string
}

export interface episodes {
  results: Array<episode>
}

export interface episode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Array<any>,
  url: string,
  created: string
}