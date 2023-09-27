export default function HeaderTemplate({children}){
    return(
        <header>
            <h1>Header desde el template</h1>
            {children}
        </header>
    )
}