const {
    selectNamHoc,
    createNamHoc,
    updateNamHoc,
    deleteNamHoc,
} = require("../../services/AdminServices/CRUDNamHoc");

const getAllNAMHOC = async (req, res) => {
    try {
        let results = await selectNamHoc();

        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    }
};

const createNAMHOC = async (req, res) => {
    try {
        const TENNAMHOC = req.body;
        let results = await createNamHoc(TENNAMHOC);

        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    }
};

const updateNAMHOC = async (req, res) => {
    try {
        MANAMHOC = req.params.MANAMHOC;
        const TENNAMHOC = req.body;
        let results = await updateNamHoc(MANAMHOC, TENNAMHOC);

        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    }
};

const deleteNAMHOC = async (req, res) => {
    try {
        const MANAMHOC = req.query.MANAMHOC;

        let results = await deleteNamHoc(MANAMHOC);

        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            EM: results.EM,
            EC: results.EC,
            DT: results.DT,
        });
    }
};

module.exports = {
    getAllNAMHOC,
    createNAMHOC,
    updateNAMHOC,
    deleteNAMHOC
};