import './Search.css'

export function Search() {
    return (
        <div>
            <h1>
                Hvad vil du booke?
            </h1>
            <div className="grid-container">
                <div className="grid-item-1">
                    <img src="https://static.thenounproject.com/png/1211373-200.png" alt="Meeting room icon"/>
                </div>
                <div className="grid-item-2">
                    <img src="https://thumbs.dreamstime.com/b/aaiae-137315496.jpg" alt="Meeting room equipment icon"/>
                </div>
                <div className="grid-item-3">
                    Mødelokale
                </div>
                <div className="grid-item-4">
                    Udstyr til mødelokale
                </div>
            </div>
        </div>
    )
}
