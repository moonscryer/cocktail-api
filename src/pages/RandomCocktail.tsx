import { fetcher } from "../helpers";
import useSWR from "swr";
import { type Cocktail } from "../types";
import { useParams } from "react-router";

const RandomCocktail = () => {
  const { idDrinks } = useParams();
  console.log(idDrinks);
  const { data: cocktailResponse } = useSWR<{ drinks: Cocktail[] }>(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    fetcher
  );
  const cocktail = cocktailResponse?.drinks[0];
  return (
    <>
      {cocktail && (
        <div className="cocktail-detail">
          <p>{cocktail.strDrink}</p>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      )}
    </>
  );
};
export default RandomCocktail;
