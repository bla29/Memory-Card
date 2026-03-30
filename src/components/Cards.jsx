import '../styles/Cards.css'
import { useState, useEffect } from 'react'

export default function Cards({ count, setCount, score, setScore }) {
    const [images, setImages] = useState([]);
    const [clickedKey, setClicked] = useState(null);

    useEffect(() => {
        const fetchImagesSequentially = async () => {
            const results = [];

            for (let i = 0; i < 12; i++) {
                const res = await fetch("https://picsum.photos/220");
                const blob = await res.blob();
                const imageUrl = URL.createObjectURL(blob);
                const imageKey = crypto.randomUUID();
                const image = {
                    url: imageUrl,
                    key: imageKey
                }
                results.push(image);
            }

            setImages(results);
        };

        fetchImagesSequentially();
    }, []);

    const imagesList = images.map((image) => {
        return (
            <button className='card' key={image.key} onClick={() => handleClick(image.key)}>
                <img src={image.url} />
                <p>Click me!</p>
            </button>
        )
    })

    function handleClick(key) {
        if (clickedKey == null) {
            setClicked(key);
        }
        if (key == clickedKey) {
            if (count > score) {
                setScore(count)
            }
            setCount(0);
            setClicked(null);
        } else {
            let newCount = count + 1;
            setCount(newCount);
        }
        newImage();
        console.log('Key: ' + key);
        console.log('Clicked Key: ' + clickedKey);
    }

    async function newImage(key) {
        let randomizeArr = images;
        randomizeArr = shuffleArray(randomizeArr)
        setImages(randomizeArr);
    }

    return (
        <div className='grid-container'>
            {imagesList}
        </div>
    )
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));


        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}