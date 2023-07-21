import React, { useState } from 'react';
const course = [
    { id: 1, title: 'Javascript' },
    { id: 2, title: 'PHP' },
    { id: 3, title: 'ReactJS' }
];


const Checkbox = () => {
    const [courses, setCourses] = useState([])
    console.log(courses)
    const handleChecked = (items) => {
        setCourses(prev => {
            if (prev.includes(items)) {
                return prev.filter(item => item.id !== items.id)
            } else {
                return [...prev, items]
            }
        })
    }

    const storageJobs = JSON.parse(localStorage.getItem('job'))

    let [job, setJob] = useState('')
    let [jobs, setJobs] = useState(storageJobs || [])
    let handleChangeJob = (e) => {
        setJob(e.target.value)
    }
    let handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('job', jsonJobs)
            return newJobs
        });
    }
    return (
        <>
            <div>
                {course.map(items =>
                    <div key={items.id}>
                        <input type="checkbox"
                            onChange={() => handleChecked(items)}
                        />
                        {items.title}
                    </div>
                )}
            </div>
            <div>
                <input value={job}
                    onChange={(e) => handleChangeJob(e)}
                />
                <button onClick={handleSubmit}>Submit</button>
                <div>
                    <ul>
                        {jobs.map((job, index) =>
                            <li key={index}>{job}</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Checkbox;