import React from 'react'
import { useGlobalContext } from './context'

const Loading = () => {
    const {isLoading} = useGlobalContext()
    return (
        <section className={isLoading ? 'section-loader show-loader' : 'section-loader'}>
            <div className='loader'></div>
        </section>
    )
}

export default Loading
