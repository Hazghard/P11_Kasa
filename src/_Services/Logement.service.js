import listelogements from "@/Assets/Mock/logements.data.json";

const GetAllLogement = () => {
    return listelogements;
};

const GetOneLogement = async (id) => {
    const Logement = await listelogements.find(logement => logement.id === id);
    if (Logement === null || Logement === undefined) {
        throw new Error('The required data do not exist');
    } else {
        return Logement;
    }
};

const LogementService = {
    GetAllLogement,
    GetOneLogement,
};

export default LogementService;