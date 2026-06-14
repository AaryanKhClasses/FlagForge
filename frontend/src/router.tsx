import { createHashRouter } from 'react-router-dom'
import RootLayout from './root'
import Launcher from './routes/launcher'

export const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Launcher /> }
        ]
    }
])
