import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "",
    authDomain: "react-mata.firebaseapp.com",
    projectId: "react-mata",
    storageBucket: "react-mata.appspot.com",
    messagingSenderId: "1004940180882",
    appId: "1:1004940180882:web:707b9c2b77e195810a154b"
};
    
const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

/*
    C R U D
*/

//Crear productos

const prods = [
    {
        "title": "Americano",
        "size": "Mediano",
        "price": 2.00,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/americano.jpg?alt=media&token=2d4f38b5-ee07-445a-913f-ed9999246e07",
        "categoria": "calientes",
        "descripcion": "Preparado con dos shots de café y agua caliente"
    },
    {
        "title": "Latte",
        "size": "Mediano",
        "price": 2.30,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/latte.jpeg?alt=media&token=10566cdc-6651-4baa-a6e5-53ffce3d760f",
        "categoria": "calientes",
        "descripcion": "Preparado con un shot de café y leche vaporizada"
    },
    {
        "title": "Flat White",
        "size": "Mediano",
        "price": 2.70,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/flat%20white.jpeg?alt=media&token=6125d2b3-ae4e-4328-a4d1-35a1aa98de2f",
        "categoria": "calientes",
        "descripcion": "Preparado con dos shots de café y leche vaporizada"
    },
    {
        "title": "Iced Latte",
        "size": "Large",
        "price": 3.60,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/iced%20latte.jpeg?alt=media&token=4e8c3730-134b-451d-80e1-747c437486cd",
        "categoria": "frias",
        "descripcion": "Preparado con dos shots de café, hielo y leche"
    },
    {
        "title": "Espresso tonic",
        "size": "Large",
        "price": 3.80,
        "stock": 7,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/espresso%20tonic.jpeg?alt=media&token=5206111a-75bd-42c5-8a87-0e6aaa57cdcd",
        "categoria": "frias",
        "descripcion": "Preparado con dos shots de café, hielo y agua tónica"
    },
    {
        "title": "Cold Brew",
        "size": "Large",
        "price": 3.80,
        "stock": 6,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/coldbrew.jpeg?alt=media&token=15793191-0ad3-4cff-882d-7c38959bafed",
        "categoria": "frias",
        "descripcion": "Café de extracción en frío, hielo y un toque de jengibre"
    },
    {
        "title": "Iced chai",
        "size": "Large",
        "price": 3.50,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/iced%20latte.jpeg?alt=media&token=4e8c3730-134b-451d-80e1-747c437486cd",
        "categoria": "frias",
        "descripcion": "Concentrado de té chai, hielo y leche"
    },
    {
        "title": "dirtychai",
        "size": "Large",
        "price": 4.10,
        "stock": 8,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/dirtychai.jpeg?alt=media&token=5a5347ad-d2da-49a1-8656-60f9ad394913.jpeg",
        "categoria": "frias",
        "descripcion": "Concentrado de té chai, hielo, leche y un shot de café espresso"
    },
    {
        "title": "Remolacha",
        "size": "Mediano",
        "price": 3.00,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/remolacha.jpeg?alt=media&token=807aa635-f925-42fd-af91-51f1525700de",
        "categoria": "calientes",
        "descripcion": "Polvo de remolacha orgánica y leche texturizada"
    },
    {
        "title": "Hot choco",
        "size": "Mediano",
        "price": 2.50,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/hotchoco.jpeg?alt=media&token=9c8f4a5f-a266-4820-8315-d7976868a3ae",
        "categoria": "calientes",
        "descripcion": "Chocolate semi amargo con leche texturizada"
    },
    {
        "title": "Cúrcuma",
        "size": "Mediano",
        "price": 3.00,
        "stock": 19,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/curcuma.jpeg?alt=media&token=7cbaae33-f511-4dbd-ab0f-ae0a912a8eec",
        "categoria": "calientes",
        "descripcion": "Cúrcuma en polvo con leche texturizada"
    },
    {
        "title": "Matcha",
        "size": "Mediano",
        "price": 3.00,
        "stock": 16,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-mata.appspot.com/o/matcha.jpeg?alt=media&token=ad8c26f8-55f7-4b41-bac3-02452cce3c44",
        "categoria": "calientes",
        "descripcion": "Té verde matcha con leche texturizada"
    }

]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            img: prod.img,
            categoria: prod.categoria,
            descripcion: prod.descripcion
        })
    })

}
// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
