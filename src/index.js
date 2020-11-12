import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createMicrofrontendRegistration } from 'avail-microfe-base'

createMicrofrontendRegistration({
  id: 'bookings',
  init: (containerId, options) => {
      const { history, subscribe } = options
      render(
          <BrowserRouter>
              <App history={history} listener={subscribe} />
          </BrowserRouter>,
          document.getElementById(containerId)
      )
      return Promise.resolve()
  },
  update: () => Promise.resolve(),
  unmount: (containerId) => {
      unmountComponentAtNode(document.getElementById(containerId))
      return Promise.resolve()
  }
})

// const pubSub = () => {
//     const subscribers = {}
  
//   function publish(eventName, data) {
//     if (!Array.isArray(subscribers[eventName])) {
//       return
//     }
//     subscribers[eventName].forEach((callback) => {
//       callback(data)
//     })
//   }
  
//   function subscribe(eventName, callback) {
//     if (!Array.isArray(subscribers[eventName])) {
//       subscribers[eventName] = []
//     }
//     subscribers[eventName].push(callback)
//   }
  
//   return {
//     publish,
//     subscribe,
//   }
// }

// createMicroFERegistration({
//     id: 'bookings',
//     init: (state, containerId, options) => {
//         const { history } = options
//         const listenerPubSub = pubSub()
//         render(
//             <BrowserRouter>
//                 <App history={history} listener={listenerPubSub} />
//             </BrowserRouter>,
//             document.getElementById(containerId)
//         )
//         return {
//             registerLayer: (layer) => {
//                 layer.listener((message) => listenerPubSub.publish('listener', message))
//                 return Promise.resolve()
//             }
//         }
//     },
//     render: (containerId, options) => {
//         const { history, eventEmitter, listener } = options
        
//         return Promise.resolve()
//     },
//     unmount: (containerId) => {
//         unmountComponentAtNode(document.getElementById(containerId))
//         return Promise.resolve()
//     }
// })