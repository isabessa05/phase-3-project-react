import './card.css'


function PoemCard ({poem}) {

  console.log(poem.lyrics)

    return (
      <div class="card">
          <div class="header">
            </div>
          <div class="container">
          <p>{poem.poem}</p>
      </div>
  </div>

)} 

export default PoemCard