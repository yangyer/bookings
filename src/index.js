import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
//import { createMicrofrontendRegistration } from 'avail-microfe-base'

// createMicrofrontendRegistration({
//   id: 'bookings',
//   init: (containerId, options) => {
//       const { history, subscribe } = options
//       render(
//           <BrowserRouter>
//               <App history={history} listener={subscribe} />
//           </BrowserRouter>,
//           document.getElementById(containerId)
//       )
//       return Promise.resolve()
//   },
//   update: () => Promise.resolve(),
//   unmount: (containerId) => {
//       unmountComponentAtNode(document.getElementById(containerId))
//       return Promise.resolve()
//   }
// })
const _init = (containerId, options) => {
    const { history, subscribe } = options
    render(
        <BrowserRouter>
            <App history={history} listener={subscribe} />
        </BrowserRouter>,
        document.getElementById(containerId)
    )
}

// _init('single-spa-playground', {
//     history: {},
//     subscribe: (event, callback) => {}
// })

export const init = _init