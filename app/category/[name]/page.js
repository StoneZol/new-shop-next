export default async function CategoryPage({params}){
    const {name} = await params
    return(
        <div>
            {name}
        </div>
    )
}