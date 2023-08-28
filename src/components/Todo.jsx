import React, { useState } from 'react'

function Todo() {
    const [input, setInput] = useState("")

    return (
        <form className='todo-form'>
            <input
                className='todo-input'
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
            />
        </form>
    )
}

export default Todo