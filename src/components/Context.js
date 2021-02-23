import React, { createContext } from 'react'

export const Dataprovider = createContext()
export const Context = ({ children }) => {
    const [cart, setcart] = React.useState([])
    const [total , setTotal] = React.useState(0)
    const products = [{
        "id": "1",
        "title": "Nike Shoes 01",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 23,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "2",
        "title": "Nike Shoes 02",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 19,
        "colors": ["red", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "3",
        "title": "Nike Shoes 03",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 50,
        "colors": ["lightblue", "white", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "4",
        "title": "Nike Shoes 04",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 15,
        "colors": ["orange", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "5",
        "title": "Nike Shoes 05",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 10,
        "colors": ["orange", "black", "crimson", "teal"],
        "count": 1
    },
    {
        "id": "6",
        "title": "Nike Shoes 06",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        "description": "UI/UX designing, html css tutorials",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 17,
        "colors": ["orange", "black", "crimson", "teal"],
        "count": 1
    }]
    const addCart = (id) => {
        const validate = cart.every(arg => {
            return arg.id !== id
        })
        if (validate) {
            const item = products.filter(i => {
                return i.id === id
            })
            setcart([...cart, ...item])
        }
        else {
            alert("Product has already been added")
        }
    }
    const decrease = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1
            }
        })
        setcart([...cart])
        getTotal()
    }

    const increase = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        })
        setcart([...cart])
        getTotal()
    }

    const removeProduct = (id) => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1)
                }
            })
            setcart([...cart])
            getTotal()
            }
    }
    const getTotal = () => {
    
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        setTotal(res)
    }

return (
    <Dataprovider.Provider value={{ products, addCart, cart, increase, decrease, removeProduct , total , getTotal}}>
        { children}
    </Dataprovider.Provider>
)
}
