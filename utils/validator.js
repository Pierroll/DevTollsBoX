// Aquí puedes agregar funciones de validación para los datos de entrada

const validateTool = (data) => {
    if (!data.name || !data.description) {
        return false;
    }
    return true;
};

module.exports = {
    validateTool
};
