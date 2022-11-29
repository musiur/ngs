import TeachersCard from "./TeachersCard";

const Teachers = () => {
    const teachersContents = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {
                teachersContents.map((item, i) => {
                    return (
                        <TeachersCard key={i} props={{item}}/>
                    )
                })
            }
        </div>
    )
}

export default Teachers;