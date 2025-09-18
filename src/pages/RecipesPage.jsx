import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";


export default function RecipesPage({ recipes, onQuickFavorite }) {
const navigate = useNavigate();


return (
<div className="page-list">


{recipes.map((r) => (
<RecipeCard key={r.id} recipe={r} onQuickFavorite={(id) => onQuickFavorite(id, navigate)} />
))}
</div>
);
}