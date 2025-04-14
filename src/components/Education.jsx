const EducationItems = (info) => {
    return(
        <div className="relative">
            <div className="absolute -top-1 left-1 w-[95%] h-15 border-1 border-Linen z-0"></div>
            <div className="font-Content flex justify-between border-1 border-Linen m-1 text-xs ml-2 mt-3 mb-3 bg-Dark-Chocolate relative z-10">
                <div className="inline-block w-[48%] pl-1 py-1">
                    <span className="block">{info.info.institution}</span>
                    <span className="block">{info.info.period}</span>
                    <span className="block">{info.info.location}</span>
                </div>
                {/*seperating line */}
                <div className="inline-block w-[2%] relative">
                    <div className="w-full h-12 bg-Linen absolute top-1"></div>
                </div>

                <div className="inline-block w-[50%] px-2 py-1">
                    <span className="block">{info.info.program}</span>
                </div>
            </div>
        </div>
  )
}

const Education = (info) => {
    return(
        <div className="bg-Dark-Chocolate w-2xs px-1 py-1">
            <div className="border-3 border-Linen text-Linen">
                <h2 className="font-Title text-3xl text-center border-b-2 pt-1">Education</h2>
                {info.info.map((item, index)=>(
                    <EducationItems key={index} info={item}></EducationItems>
                ))}
            </div>
        </div>
    )
}

export default Education;