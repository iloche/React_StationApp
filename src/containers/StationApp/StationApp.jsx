import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import StationRequest from "../../components/StationRequest/StationRequest";

const StationApp = () => {

    //* State pour la requête...
    const [station, setStation] = useState(null);

    //* Gestion du résultat du formulaire
    const handleSearchStation = (stationQuery) => {

        setStation(stationQuery);
    }

    //* Rendu
    return (
        <div>
            <SearchForm labelContent='Votre gare' onSearch={handleSearchStation}/>
            {station ? (
                <>
                <h2>Résultat pour "{station}"</h2>
                <StationRequest stationToFind={station} />
                </>
            ) : (
                <h2>Aucune recherche effectuée...</h2>
            )}
        </div>
    )
}

export default StationApp; 