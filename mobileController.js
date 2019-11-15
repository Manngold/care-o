import Patient from "./models/Patient";

export const patients = async (req, res) => {
    const {
        query: { name: searchTerm }
    } = req;
    let result = [];
    try {
        result = await Patient.find({
            name: { $regex: searchTerm, $options: "i" }
        });
    } catch (error) {
        result.push("Can't find patient");
    }

    if (result.length == 0) {
        result.push("Can't find patient");
    }
    console.log(result);
    return result;
};
