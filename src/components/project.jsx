import ticket from '../assets/ticketnew.jpg'
import netflix from '../assets/netflix.png'
import '../CSS/project.css'
function Project(){
    return(
        <>
        <div className="pr-container">
            <div className="p">
                <div className='img'>
                    <img src={ticket} alt="img" />
                    <p>built a clone ticketnew web using html, css, js</p>
                </div>
                <div className='img'>
                    <img src={netflix} alt="img" />
                    <p>built a clone netflix web using react js</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Project;