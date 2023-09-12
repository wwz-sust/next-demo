export default function Id({params}: {params: {id: string}}){
    console.log(111);
    
    return (
        <div>
            {params.id}
        </div>
    )
}