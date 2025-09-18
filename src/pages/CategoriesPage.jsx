import { Link } from "react-router-dom";


export default function CategoriesPage() {
const categories = [
{ name: "India"},
{ name: "Mexico"},
{ name: "Italië"}, 
{ name: "Nederland"},
{ name: "Verenigde Staten"},
{ name: "Duitsland"},
{ name: "Spanje"},
{ name: "Turkije"},
{ name: "Peru"},
];


return (
<div className="cat">
<h2>Kies een land</h2>
<ul>
{categories.map((c) => (
<li key={c.name} >
<Link to={`/categorie/${c.name}`}>{c.name}</Link>
</li>
))}
</ul>
</div>
);
}