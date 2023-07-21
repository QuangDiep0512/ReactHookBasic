import { useMemo, useState, useRef } from "react"
const Course = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [course, setCourse] = useState([])
    const nameRef = useRef()
    const handleAddCourse = () => {
        setCourse([...course, { name, price: parseFloat(price) }])
        setName(" ");
        setPrice(" ");
        nameRef.current.focus();
    }


    const total = useMemo(() => {
        const result = course.reduce((result, prod) => {
            return result + prod.price
        }, 0)
        return result
    }, [course])

    return (
        <>
            <input type="text"
                ref={nameRef}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <input type="text"
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />

            <button onClick={handleAddCourse}>Add</button>
            <h3>Total: {total}</h3>
            <div>
                <ul>
                    {course.map((courses, index) => (
                        <li key={index}>
                            {courses.name}-{courses.price}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Course;