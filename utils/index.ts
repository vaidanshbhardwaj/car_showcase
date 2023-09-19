export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0b0abec4d5msh5007cd0a130b124p11f1edjsn707705f51688",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
