export default function FilterLogic(
  grapes,
  filterParameters,
  searchTerm,
  meteo,
  lage
) {
  var filteredGrapes = [...grapes];
  if (
    filterParameters.weatherStation &&
    meteo[filterParameters.weatherStation]
  ) {
    const huglin = meteo[filterParameters.weatherStation]['huglin'];
    const rain = meteo[filterParameters.weatherStation]['rain'];
    // unused const sun = meteo[filterParameters.weatherStation]['sun'];
    filteredGrapes = filteredGrapes.filter((grape) => {
      return (
        grape.huglin_min <= huglin &&
        grape.huglin_max >= huglin &&
        grape.regen_min <= rain &&
        grape.regen_max >= rain
      );
    });
  }
  if (
    filterParameters.hangneigung &&
    filterParameters.ausrichtung &&
    lage[filterParameters.hangneigung] &&
    lage[filterParameters.hangneigung][filterParameters.ausrichtung]
  ) {
    const value =
      lage[filterParameters.hangneigung][filterParameters.ausrichtung];
    filteredGrapes = filteredGrapes.filter((grape) => {
      return grape.sonnenwinkel_min <= value && grape.sonnenwinkel_max >= value;
    });
  }
  if (filterParameters.kalkhaltig > -1) {
    filteredGrapes = filteredGrapes.filter((grape) => {
      return (
        grape.kalkgehalt_min <= filterParameters.kalkhaltig &&
        grape.kalkgehalt_max >= filterParameters.kalkhaltig
      );
    });
  }
  if (filterParameters.bodenbeschaffenheit > -1) {
    filteredGrapes = filteredGrapes.filter((grape) => {
      return (
        grape.bodenbeschaffenheit_min <= filterParameters.bodenbeschaffenheit &&
        grape.bodenbeschaffenheit_max >= filterParameters.bodenbeschaffenheit
      );
    });
  }
  if (filterParameters.bodentiefe > -1) {
    filteredGrapes = filteredGrapes.filter((grape) => {
      return (
        grape.bodentiefe_min <= filterParameters.bodentiefe &&
        grape.bodentiefe_max >= filterParameters.bodentiefe
      );
    });
  }
  if (filterParameters.pilzresistenz !== -1) {
    filteredGrapes = filteredGrapes.filter((grape) => {
      return grape.pilzresistent === filterParameters.pilzresistenz;
    });
  }

  if (filterParameters.color) {
    filteredGrapes = filteredGrapes.filter((a) =>
      a.color.includes(filterParameters.color)
    );
  }

  var filteredGrapes = filteredGrapes.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredGrapes;
}
