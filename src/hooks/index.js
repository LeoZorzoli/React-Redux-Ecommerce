import { useState } from 'react'

export const useSelect = () => {
    const [selected, setSelected] = useState(null)

    const onChange = (event) => {
        setSelected(event.target.value)
    }

    return{
        selected,
        onChange
    }
}
