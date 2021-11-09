import React from "react";
import { useState, useEffect } from "react";
import Styles from '../Cards/Cards.module.css';

function Cards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((result) => { setIsLoaded(true); setItems(result); },
                (error) => { setIsLoaded(true); setError(error); }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <>
                <button children={Styles.popup}>Open Popup</button>
                <input className={Styles.inpt} onChange={e =>{setSearchItem(e.target.value)}} type="search" placeholder="Search robots"></input>
                <div className={Styles.mainDiv}>
                    {items.filter( (val) => {
                        if(searchItem === "" ){
                            return items;
                        }
                        else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
                            return items;
                        }
                        else {
                            return "";
                        }
                    }).map(item => (
                        <div className={Styles.cards}>
                                <img src={`https://robohash.org/${item.id}?200x200`} alt="Images" />
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </>

        );
    }
}

export default Cards