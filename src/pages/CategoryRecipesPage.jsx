import { useParams } from "react-router-dom";
import RecipesPage from "./RecipesPage";

export default function CategoryRecipesPage({ recipes }) {
  const { land } = useParams();

  
  const filtered = recipes.filter(
    (r) => r.country.toLowerCase() === land.toLowerCase()
  );

  if (!filtered.length) {
    return <p className="geen-recept">Geen recepten gevonden voor: {land}!</p>;
  }

  return (
    <RecipesPage recipes={filtered} />
  );
}
