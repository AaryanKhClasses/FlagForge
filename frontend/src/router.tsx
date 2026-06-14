import { createHashRouter } from 'react-router-dom'
import RootLayout from './root'
import Home from './routes/home'

export const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> }
        ]
    }
])
