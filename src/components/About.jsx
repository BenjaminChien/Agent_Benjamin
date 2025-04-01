const About = ({info}) =>{
    return(
        <div className="stamp-border mt-5 px-4 py-3 w-2xs">
            <h2 className="text-3xl font-Title">About</h2>
            <p className="font-content">{info}</p>
        </div>
    )
}

export default About;