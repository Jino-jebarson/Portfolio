import sv1 from '../assets/bg-header.png'
import pro from '../assets/pro2.png'
import '../CSS/hero.css'
function Hero() {
    return (
        <>
        <div className='p-container'>
              <img src={sv1} alt="sv1" />
            <div className='hero-container'>
                <div className='h1'>
                    <p className='c1'>I'm</p>
                    <h1 className='c2'>Jino Jebarson</h1>
                    <p className='c3'>Web Developer</p>
                    <button className='b1'>download cV</button>
                </div>
                <div className='h2'>
                    <div className='pro'>
                    <img src={pro} alt="pro" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Hero;