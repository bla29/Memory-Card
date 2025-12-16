import '../styles/Header.css'

export default function Header() {
    return (
        <div className='header-layout'>
            <div className='description'>
                <h1>Memory Game</h1>
                <p>Get points by clicking on an image but don't click on any image more than once!</p>
            </div>
            <div className='score-section'>
                <p>Score: 1</p>
                <p>Best Score: 8</p>
            </div>
        </div>
    )
}