import { useId, useState } from "react"

const SearchForm = ({ onSearch, labelContent }) => {

    //*Id d'accessibilité du formulaire
    const formId = useId();

    //* State du contenu du formulaire
    const [query, setQuery] = useState('');

    //* Gestion de la validation du formulaire
    const handleQuerySubmit = (e) => {

        //* Désactivation du comportement par défaut
        e.preventDefault();

        //* Envoie des données (state) vers le composant parent
        //* La fonction "trim" permet de supprimer les espaces avant et après le contenu
        onSearch(query.trim());

        //* Réinitialiser le formulaire
        setQuery('');
    }

    //* Rendu
    return (
        <form onSubmit={handleQuerySubmit}>
            {labelContent && (
                //* label conditionnel : la balise est affiché au besoin
                <label htmlFor={formId}>{labelContent} : </label>
            )}
            {/* Résumé du binding: 
                - value={...} : State -> Input (Si le state est modifié, l'input aussi)
                - onChange={...} : Input -> State (Modifie le state en fonction de l'input)
             */}
            <input id={formId} type="text" 
            value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">🔎</button>
        </form>
    )
}
export default SearchForm;