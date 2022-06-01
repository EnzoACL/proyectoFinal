mmmagic: mime de archivos
image-size: determinar dimensiones de imagenes que guardamos
image-magic: manipular imagenes como si fuera photoshop pero con codigo

CreateContext -> Se crea un storage y ahi se exporta el context y la funcion ContextProvider:

export const Context = createContext();

export function ContextProvider ( {children} {
dentro de la funcion se almacena el storage de datos
const store = usestate ({
id:
pass:
etc:
});

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )

}
Luego se anida el componente app en index.js con el context.provider y ya se pueden usar los datos de store en toda la aplicacion.
