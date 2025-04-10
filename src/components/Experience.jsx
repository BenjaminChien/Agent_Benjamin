const ExperienceItem = (info) =>{
    return(
        <div className="relative pl-8 mb-5">
            {/*dot */}
            <div className="w-4 h-4 bg-Beige rounded-full border-2 absolute left-1 top-1"></div>
            {/*content */}
            <div>
                <span className="font-Title italic">{info.info.date}</span>
                <h3 className="font-Title font-bold text-xl">{info.info.title}</h3>
                <span className="font-Title block mb-2">{info.info.company}</span>
                <p className="font-Content">{info.info.description}</p>
                <ul className="font-Content list-disc pl-5">
                    {info.info.responsibilities.map((responsibilitie, index)=>(
                        <li key={index}>{responsibilitie}</li>
                    ))}
                </ul>
            </div>  
        </div>
    )
}

const Experience = (info) => {
    return (
    <div className="mt-5 py-3 w-2xs">

        {/* title component */}
        <div className="relative bg-Beige px-4 mb-4 inline-block text-3xl font-Title">
            {/* Top-left triangle */}
            <div className="border-t-[20px] border-r-[20px] border-t-Dark-Chocolate border-r-transparent absolute -left-1 -top-1"></div>
            
            {/* Bottom-right triangle */}
            <div className="absolute -bottom-1 -right-1 border-b-[20px] border-l-[20px] border-b-Dark-Chocolate border-l-transparent"></div>
            Experience
        </div>
        
        <div className="relative">
            {/* dashed line */}
            <div className="absolute w-0 left-2.5 top-1 bottom-0 border-l-2
            border-Dark-Gray border-dashed  h-full"></div>

            {info.info.map((item, index)=>(
                    <ExperienceItem key={index} info={item}></ExperienceItem>
                ))
            }
        </div>
    </div>
    )
}

export default Experience;