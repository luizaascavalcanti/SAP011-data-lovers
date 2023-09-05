//Filters: name, specie, gender, origin, location, episode
 export const nameFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.name === filter);
    }
  };
  export const specieFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.specieFilter === filter);
    }
  };
  export const genderFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.genderFilterFilter === filter);
    }
  };
  export const originFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.originFilterFilter === filter);
    }
  };
  export const locationFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.locationFilter === filter);
    }
  };
  export const episodeFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.episodeFilter === filter);
    }
  };
