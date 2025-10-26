const KEY = "products"; // <-- misma clave que usa el hook en AdminPage

function getProducts() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setProducts(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

function createProduct(product) {
  const items = getProducts();
  const id = product.id ?? (crypto?.randomUUID?.() || `${Date.now()}_${Math.random()}`);
  const newItem = { ...product, id };
  setProducts([...items, newItem]);
  return newItem;
}

function updateProduct(product) {
  const items = getProducts();
  const out = items.map((it) => (it.id === product.id ? product : it));
  setProducts(out);
  return product;
}

function deleteProduct(id) {
  const items = getProducts();
  setProducts(items.filter((it) => it.id !== id));
}

// ---- Aliases para no cambiar tu AdminPage ----
function addProduct(product) {
  return createProduct(product);
}
function editProduct(product) {
  return updateProduct(product);
}

export default {
  getProducts,
  setProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  // aliases usados por AdminPage:
  addProduct,
  editProduct,
};
