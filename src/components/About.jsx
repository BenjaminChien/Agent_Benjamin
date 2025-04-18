const About = ({info}) =>{

    return(
        <div className="stamp-border mt-5 px-5 py-4">
            <h2 className="text-3xl font-Title">About</h2>
            {/*paragraph*/}
            {info.trim().split(/\n\s*\n/).map((paragraph, index)=>(
                <p key={index} className="leading-relaxed mb-4 font-Content">
                    {paragraph}
                </p>
            ))}
        </div>
    )
}

export default About;