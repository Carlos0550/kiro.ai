import { useEffect, useMemo, useState } from 'react'

function useWidth() {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const res = () => setWidth(window.innerWidth)
        window.addEventListener('resize', res)
        return () => window.removeEventListener('resize', res)
    }, [])

    return useMemo(() => ({
        width
    }), [
        width
    ])
}

export default useWidth