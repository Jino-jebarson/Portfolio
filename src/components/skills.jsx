import html from '../assets/html.png'
import css from '../assets/css3.png'
import js from '../assets/js.webp'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import '../CSS/skills.css'

function Skills(){
    return(
        <>
        <h2 class="skills"> skills</h2>
        <div class="skill-container">
            <div class="skill">
                <div class="html">
                    <img src={html} alt="img" height={'75px'} width={'75px'} />
                    <figcaption>90%</figcaption>
                    <span>html</span>
                </div>
                <div class="css">
                    <img src={css} alt="img" height={'75px'} width={'75px'} />
                    <figcaption>85%</figcaption>
                    <span>css</span>
                </div>
                <div class="js">
                    <img src={js} alt="img" height={'75px'} width={'75px'} />
                    <figcaption>70%</figcaption>
                    <span>javascript</span>
                </div>
                <div class="sql">
                    <img src={react}alt="img" height={'75px'} width={'75px'} />
                    <figcaption>90%</figcaption>
                    <span>react</span>
                </div>
                <div class="sql">
                    <img src={sql}alt="img" height={'75px'} width={'75px'} />
                    <figcaption>90%</figcaption>
                    <span>sql</span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Skills