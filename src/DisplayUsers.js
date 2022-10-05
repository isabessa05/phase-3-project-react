
import './card.css'


function DisplayUsers({poem}) {
   
      
          return (
            <div class="card">
                <div class="header">
                  </div>
                <div class="container">
                <p>{poem.poem}</p>
            </div>
            <button> Edit </button>
            <button> Delete </button>
        </div>
      )} 
      

export default DisplayUsers