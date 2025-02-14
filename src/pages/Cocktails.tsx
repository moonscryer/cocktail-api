import useSWR from "swr";
import { fetcher, slugit } from "../helpers";
import { type Cocktail } from "../types";
import { Link } from "react-router";

const Cocktails = () => {
  const {
    data: cocktails,
    isLoading,
    error,
  } = useSWR<{ drinks: Cocktail[] }>(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );
  return (
    <>
      <h1>Cocktails</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="cocktails">
        {cocktails &&
          cocktails.drinks.map((tarzan) => (
            <li key={tarzan.idDrink}>
              <Link
                to={`/cocktails/${tarzan.idDrink}/${slugit(tarzan.strDrink)}`}
              >
                <div>
                  <img src={tarzan.strDrinkThumb} alt={tarzan.strDrink} />
                </div>
                <p>{tarzan.strDrink}</p>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Cocktails;
