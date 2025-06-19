// import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

const app = (
    <BrowserRouter>

            <App/>

    </BrowserRouter>
)
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)
root.render(app)

