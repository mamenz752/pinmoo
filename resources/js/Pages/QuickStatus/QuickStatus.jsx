import React from "react";

export default function QuickStatus(props) {
    const { moods } = props;
    console.log(props);
    
    return (
        <div>
            <div>
                <p>今の気分をシェアしましょう</p>
            </div>
            
            <form
                className="grid gap-4"
            >
                <div>
                    { moods.map((mood) => (
                        <button key={mood.id}>
                           <p>{ mood.mood }</p>
                        </button>
                    )) }
                </div>
            </form>
        </div>
    );
}
