//Filters: name, specie, gender, origin, location, episode
 export const statusFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.status === filter);
    }
  };
 