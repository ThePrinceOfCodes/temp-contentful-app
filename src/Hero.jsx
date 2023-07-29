import heroImg from './assets/hero.svg'

const Hero = () => {
    return <section className="hero">
     <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, similique perspiciatis minus, consequatur esse laborum rerum neque quaerat deleniti aliquid eum praesentium nostrum eaque voluptas libero laudantium, ratione excepturi repellat?</p> 
        </div>
        <div className="img-container">
            <img src={heroImg} alt="hero img"  className='img'/>
        </div>
     </div>
    </section>
}

export default Hero;