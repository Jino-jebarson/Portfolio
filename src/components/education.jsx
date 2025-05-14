import '../CSS/education.css'
import log from '../assets/bg-header.png'
function Education(){
    return(
        <>
        <img className='edlog' src={log} alt="log" />
        <div className='education-container'>
            <h2>Education</h2>
            <div className='e1'>
               <div>
                    <p className='y'>2018</p>
                    <p className='d'>SSLC - secondary school leaving certificate</p>
                    <p className='i'>brindhavan higher secondary school</p>
                    <p className='e'>my time at brindhavan filled with valuable learning experience that helped shape my personal and academic growth</p>
                </div> 
                <div>
                    <p className='y'>2019-2020</p>
                    <p className='d'>HSC - Higher secondary school</p>
                    <p className='i'>brindhavan higher secondary school</p>
                    <p className='e'>completed 12th grade in the computer science stream with a strong foundation in mathematics and computer science</p>
                </div>
                <div>
                    <p className='y'>2020-2024</p>
                    <p className='d'>B.E. - Bachelor of engineering in mechanical</p>
                    <p className='i'>st.joseph's college of engineering</p>
                    <p className='e'>conducted a research project on "optimization of friction surfacing on disimilar materials(mild steel, inconel steel-625)"</p>
                </div>
                <div>
                    <p className='y'>2024-2025</p>
                    <p className='d'>web developement</p>
                    <p className='i'>besant technologies</p>
                    <p className='e'>"Skilled in web development, creating responsive and user-friendly websites and web applications using modern technologies."</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Education