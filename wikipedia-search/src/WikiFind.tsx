import React, { useEffect, useState } from "react";


export interface WikiResultProps {
    searchKey: string
}

export function WikiResults(props: WikiResultProps) {
    const [items, setItems] = useState([] as string[]);
    useEffect(() => {
        const fetchItems = async (k: string) => {
            if (k?.length) {
                let res = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${k}&origin=*&format=json`);
                setItems((await res.json())[1])
            } else {
                setItems([])
            }
        }

        fetchItems(props?.searchKey)
    }, [props?.searchKey])
    return <div>
        {items.map((i, index) => <div key={index}>{i}</div>)}
    </div>
}