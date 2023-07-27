import listelogements from "@/Assets/Mock/logements.data.json";


let GetAllLogement = () => {
    return listelogements
}

let GetOneLogement = async (id) => {
    const Logement = await listelogements.find(logement => logement.id === id);
    return Logement
}

export default { GetAllLogement, GetOneLogement };