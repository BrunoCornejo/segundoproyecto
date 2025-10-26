export const validateProduct = (product) => {
    const errors = {};

    if (!product.name || product.name.trim() === "") {
        errors.name = "El nombre del producto es obligatorio.";
    }

    if (!product.price || isNaN(product.price) || product.price <= 0) {
        errors.price = "El precio debe ser un número positivo.";
    }

    if (!product.description || product.description.trim() === "") {
        errors.description = "La descripción del producto es obligatoria.";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateProductId = (id) => {
    if (!id || typeof id !== "string" || id.trim() === "") {
        return false;
    }
    return true;
};