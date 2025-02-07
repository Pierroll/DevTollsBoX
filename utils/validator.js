// Aquí puedes agregar funciones de validación para los datos de entrada

const validarHerramienta = (data) => {
    if (!data.nombre || !data.descripcion) {
        return false;
    }
    return true;
};

module.exports = {
    validarHerramienta
};
