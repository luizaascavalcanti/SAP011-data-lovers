//Filters: name, specie, gender, origin, location, episode
export const generalFilter = (data, filterStatus, filterGender, filterName) => {
  data = genderFilter(data, filterGender);
  data = statusFilter(data, filterStatus);
  data = nameFilter(data, filterName);
  return data;
};

const nameFilter = (data, filter) => {
  if (filter === "") {
    return data;
  } else {
    return data.filter((character) => character.name === filter);
  }
};

 const genderFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.gender === filter);
    }
  };

  const statusFilter = (data, filter) => {
    if (filter === "All") {
      return data;
    } else {
      return data.filter((character) => character.status === filter);
    }
  };
 