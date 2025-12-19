import '../styles/Cards.css'
import { useState, useEffect } from 'react'

export default function Cards({ count, setCount }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImagesSequentially = async () => {
            const results = [];

            for (let i = 0; i < 12; i++) {
                const res = await fetch("https://picsum.photos/220");
                const blob = await res.blob();
                const imageUrl = URL.createObjectURL(blob);
                results.push(imageUrl);
            }

            setImages(results);
        };

        fetchImagesSequentially();
    }, []);

    const imagesList = images.map((image, index) => {
        return (
            <button className='card' key={index} onClick={handleClick}>
                <img src={image} key={index} />
                <p>Click me!</p>
            </button>
        )
    })

    function handleClick() {
        let newCount = count + 1;
        setCount(newCount);
    }

    return (
        <div className='grid-container'>
            {imagesList}
        </div>
    )
}