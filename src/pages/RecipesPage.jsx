import RecipeCard from "../components/RecipeCard";

export default function RecipesPage({ recipes }) {

  return (
    <div className="page-list">
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          recipe={r}
        />
      ))}
    </div>
  );
}
