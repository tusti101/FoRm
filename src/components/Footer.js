function Footer(){
    return (
        <div className="footer container">
            <div>
                <a href="/" className="title mr-1">FoRm</a>
                <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div>
                <p className="title">Worked With</p>
                <p className="li">React</p>
                <p className="li">Firebase</p>
                <p className="li">Github</p>
                <p className="li">Netlify</p>
            </div>
            <div>
                <p className="title">Find me on</p>
                <a href="https://github.com/tusti101" className="li">Github</a>
                <a href="https://www.linkedin.com/in/nusrat-jahan-tusti-8877b520a/" className="li">LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer