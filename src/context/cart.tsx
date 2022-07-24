import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

interface cartProps{
    title: string
    imagem: any
}



export function CartProvider({children}:any){
    const [filme, setFilme] = useState<cartProps[]>([])



  async function handleAdd(title:string, imagem:any) {
   
    filme.push({title:title, imagem:imagem})
    setFilme(filme)
    
   }
    



    return(
        <CartContext.Provider value={{handleAdd, filme}}>
            {children}
        </CartContext.Provider>
    )

}