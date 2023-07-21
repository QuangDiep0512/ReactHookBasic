import React, { useState } from 'react';
const Radio = () => {
    const course = [
        { id: 1, title: 'Javascript' },
        { id: 2, title: 'PHP' },
        { id: 3, title: 'ReactJS' }
    ];

    const [name, setName] = useState({ id: 1 })
    const handleClick = () => {
        console.log(name)
    }

    return (
        <div>
            {course.map(items =>
                <div key={items.id}>
                    <input type="radio"
                        checked={name.id === items.id}
                        onChange={() => setName({ id: items.id, title: items.title })}
                    />
                    {items.title}
                </div>)}
            <button onClick={() => handleClick()}>Register</button>
        </div>
    )
}

export default Radio;