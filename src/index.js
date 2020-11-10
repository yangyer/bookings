import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

window.bookingsRender = (containerId, history) => {
    render(
        <BrowserRouter>
            <App history={history} />
        </BrowserRouter>,
        document.getElementById(containerId)
    )
}

window.bookingsUnmount = containerId => {
    unmountComponentAtNode(document.getElementById(containerId))
}
