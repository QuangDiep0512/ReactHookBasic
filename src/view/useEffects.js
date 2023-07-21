import { useEffect, useState, useRef } from "react"
const Content = () => {
    let [post, setPost] = useState([])
    const tabs = ['posts', 'comments', 'albums']
    let [type, setType] = useState('posts')
    let [height, setHeight] = useState(false)
    let [width, setWidth] = useState(window.innerWidth)
    let [countdown, setCountdown] = useState(180)
    let [loading, setLoading] = useState(true)
    let [avatar, setAvatar] = useState()
    let [count, setCount] = useState(1)
    let [minute, setMinute] = useState(60)
    let [second, setSecond] = useState(60)
    //Gọi API
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
                .then(res => res.json())
                .then((postt) => setPost(postt))
            setLoading(false)
        }, 2000)
    }, [type])

    //Scroll chuột
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setHeight(true)
            } else {
                setHeight(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    //Resize width
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])

    //setTimeout đếm số giảm dần
    useEffect(() => {
        let timer = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)
        return () => { clearInterval(timer) }
    }, [])

    let handleClick = (item) => {
        setType(item)
    }

    let handleAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    // useEffect(() => {
    //     return () => {
    //         URL.revokeObjectURL(avatar.preview)
    //     }
    // }, [avatar])
    useEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    let handleClickCount = () => {
        setCount(count + 1)
    }

    //VD: timer 60:60
    useEffect(() => {
        let clear = setInterval(() => {
            setSecond(second - 1)
            if (second <= 0) {
                setSecond(60)
                setMinute(minute - 1)
            }
        }, 1000)
        return () => {
            clearInterval(clear)
        }
    }, [second, minute])

    //Sử dụng useRef
    const inputRef = useRef(null);
    const handleClickUref = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            {
                tabs.map((items, index) => (
                    <button className="tab"
                        key={index}
                        onClick={() => handleClick(items)}
                        style={type === items ? {
                            backgroundColor: '#ccc'
                        } : {}}
                    >{items}</button>
                ))
            }
            {
                loading === false && post.map((post, index) => (
                    <ul key={index}>
                        <li>
                            {post.name || post.title}
                        </li>
                    </ul>
                ))
            }
            {
                loading === true && <div>Loading data...</div>
            }
            {height && <button style={{ position: 'fixed', bottom: 20, right: 20 }}>Go to up</button>}
            <h2>Kích thước màn hình : {width}</h2>
            <h3>Số đếm giảm dần: {countdown}</h3>
            <div>
                <input
                    type="file"
                    onChange={handleAvatar}
                />
                <div>
                    {avatar && (<img src={avatar.preview} alt="" width="70%" height="60%" />)}
                </div>
            </div>
            <div>
                <h2>{count}</h2>
                <button onClick={handleClickCount}>Run</button>
            </div>
            <div>
                <h3>Time life: {minute}:{second}</h3>
            </div>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={handleClickUref}>Focus input</button>
            </div>
        </div>
    )
}

export default Content;