import RandomCocktail from "./RandomCocktail";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>Welcome to the main page of the Lemon Cocktails database!</h2>
      <hr />
      <h3>Random cocktail of the moment:</h3>
      <RandomCocktail />
    </>
  );
};
export default Home;
