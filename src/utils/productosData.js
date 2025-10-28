import { guardarEnLocalStorage, obtenerDelLocalStorage } from "./localStorage";

const productosIniciales = {
    celulares: [
        { id: 1, nombre: "iPhone 15", precio: 1200, descripcion: "Pantalla OLED, chip A17", imagen: "https://via.placeholder.com/250x150?text=iPhone+15" },
        { id: 2, nombre: "Samsung Galaxy S24", precio: 1100, descripcion: "Cámara triple, Android 14", imagen: "https://via.placeholder.com/250x150?text=Galaxy+S24" },
        { id: 3, nombre: "Xiaomi 14 Pro", precio: 950, descripcion: "Pantalla AMOLED, Snapdragon 8 Gen 3", imagen: "https://via.placeholder.com/250x150?text=Xiaomi+14+Pro" },
        { id: 4, nombre: "Google Pixel 8", precio: 999, descripcion: "Cámara IA avanzada, Android puro", imagen: "https://via.placeholder.com/250x150?text=Pixel+8" },
        { id: 5, nombre: "Motorola Edge 50", precio: 850, descripcion: "Carga rápida 68W, pantalla curva", imagen: "https://via.placeholder.com/250x150?text=Edge+50" },
        { id: 6, nombre: "OnePlus 12", precio: 920, descripcion: "Rendimiento extremo con Snapdragon 8 Gen 3", imagen: "https://via.placeholder.com/250x150?text=OnePlus+12" },
        { id: 7, nombre: "Huawei P60 Pro", precio: 890, descripcion: "Fotografía profesional con lente Leica", imagen: "https://via.placeholder.com/250x150?text=P60+Pro" },
        { id: 8, nombre: "Realme GT 6", precio: 720, descripcion: "Gran autonomía y pantalla AMOLED", imagen: "https://via.placeholder.com/250x150?text=Realme+GT+6" },
        { id: 9, nombre: "Nokia X30", precio: 680, descripcion: "Diseño sostenible, Android One", imagen: "https://via.placeholder.com/250x150?text=Nokia+X30" },
        { id: 10, nombre: "Asus ROG Phone 8", precio: 1300, descripcion: "Teléfono gamer con refrigeración avanzada", imagen: "https://via.placeholder.com/250x150?text=ROG+Phone+8" },
    ],

    notebooks: [
        { id: 1, nombre: "MacBook Pro M3", precio: 2500, descripcion: "Chip M3, 16GB RAM, SSD 1TB", imagen: "https://via.placeholder.com/250x150?text=MacBook+Pro+M3" },
        { id: 2, nombre: "Lenovo ThinkPad X1", precio: 1600, descripcion: "Intel i7, 16GB RAM, SSD 1TB", imagen: "https://via.placeholder.com/250x150?text=ThinkPad+X1" },
        { id: 3, nombre: "HP Spectre x360", precio: 1450, descripcion: "Convertible táctil, i7 13ª Gen", imagen: "https://via.placeholder.com/250x150?text=Spectre+x360" },
        { id: 4, nombre: "ASUS ZenBook 14", precio: 1300, descripcion: "OLED Display, Ryzen 7", imagen: "https://via.placeholder.com/250x150?text=ZenBook+14" },
        { id: 5, nombre: "Dell XPS 13", precio: 1400, descripcion: "Pantalla InfinityEdge, i7", imagen: "https://via.placeholder.com/250x150?text=Dell+XPS+13" },
        { id: 6, nombre: "Acer Swift 5", precio: 1200, descripcion: "Ligera, batería de larga duración", imagen: "https://via.placeholder.com/250x150?text=Acer+Swift+5" },
        { id: 7, nombre: "MSI Stealth 16", precio: 2200, descripcion: "Notebook gamer con RTX 4070", imagen: "https://via.placeholder.com/250x150?text=MSI+Stealth+16" },
        { id: 8, nombre: "Razer Blade 15", precio: 2700, descripcion: "Diseño premium, pantalla 240Hz", imagen: "https://via.placeholder.com/250x150?text=Razer+Blade+15" },
        { id: 9, nombre: "Samsung Galaxy Book 3", precio: 1350, descripcion: "AMOLED 15”, ecosistema Galaxy", imagen: "https://via.placeholder.com/250x150?text=Galaxy+Book+3" },
        { id: 10, nombre: "Huawei MateBook X Pro", precio: 1800, descripcion: "Pantalla 3K táctil, diseño elegante", imagen: "https://via.placeholder.com/250x150?text=MateBook+X+Pro" },
    ],

    tablets: [
        { id: 1, nombre: "iPad Air 5", precio: 800, descripcion: "Pantalla Liquid Retina, chip M1", imagen: "https://via.placeholder.com/250x150?text=iPad+Air+5" },
        { id: 2, nombre: "Samsung Galaxy Tab S9", precio: 750, descripcion: "Pantalla AMOLED 12''", imagen: "https://via.placeholder.com/250x150?text=Galaxy+Tab+S9" },
        { id: 3, nombre: "Xiaomi Pad 6 Pro", precio: 550, descripcion: "Snapdragon 8+, pantalla 144Hz", imagen: "https://via.placeholder.com/250x150?text=Pad+6+Pro" },
        { id: 4, nombre: "Lenovo Tab P12", precio: 600, descripcion: "Gran pantalla 3K, 8GB RAM", imagen: "https://via.placeholder.com/250x150?text=Lenovo+Tab+P12" },
        { id: 5, nombre: "Amazon Fire HD 10", precio: 250, descripcion: "Ideal para entretenimiento", imagen: "https://via.placeholder.com/250x150?text=Fire+HD+10" },
        { id: 6, nombre: "Microsoft Surface Pro 9", precio: 1400, descripcion: "2 en 1, Windows 11", imagen: "https://via.placeholder.com/250x150?text=Surface+Pro+9" },
        { id: 7, nombre: "Huawei MatePad 11", precio: 650, descripcion: "Pantalla 120Hz, HarmonyOS", imagen: "https://via.placeholder.com/250x150?text=MatePad+11" },
        { id: 8, nombre: "Realme Pad 2", precio: 400, descripcion: "Diseño metálico, 8GB RAM", imagen: "https://via.placeholder.com/250x150?text=Realme+Pad+2" },
        { id: 9, nombre: "Alldocube iPlay 50", precio: 220, descripcion: "Tablet económica Android 13", imagen: "https://via.placeholder.com/250x150?text=iPlay+50" },
        { id: 10, nombre: "Honor Pad X9", precio: 480, descripcion: "Altavoces estéreo, batería 7000mAh", imagen: "https://via.placeholder.com/250x150?text=Honor+Pad+X9" },
    ],
};

export function inicializarProductos() {
    ["celulares", "notebooks", "tablets"].forEach(tipo => {
        const existentes = obtenerDelLocalStorage(tipo);
        if (!existentes.length) {
            guardarEnLocalStorage(tipo, productosIniciales[tipo]);
        }
    });
}
