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
        
        {/* Experience list component */}
        <div>
            <span className="font-Title italic">{info.info[0].date}</span>
            <h3 className="font-Title font-bold text-xl">{info.info[0].title}</h3>
            <span className="font-Title block mb-2">{info.info[0].company}</span>
            <p className="font-Content">{info.info[0].description}</p>
            <ul className="font-Content list-disc pl-5">
                {info.info[0].responsibilities.map((responsibilitie, index)=>(
                    <li key={index}>{responsibilitie}</li>
                ))}
            </ul>
        </div>  
    </div>)
}

export default Experience;