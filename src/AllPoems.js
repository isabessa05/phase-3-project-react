import PoemCard from "./PoemCard"

function AllPoems ({poems}) {


    const poemCard = poems.map((poem) => {
        return <PoemCard key={poem.id} poem={poem}/>
    })

    return (

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 5fr)", gridGap: 10 }}>
            {poemCard}
        </div>
    )

}

export default AllPoems