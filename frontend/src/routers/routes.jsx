import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import { Homepage } from '../pages/Homepage';
import ReportTrash from '../pages/ReportTrash';
import DropPointspage from '../pages/DropPointspage';
import TrashScanner from '../components/TrashScanner';
import SchedulePickup from '../pages/SchedulePickup';
import Community from '../pages/Commnitypage';
import { Loginpage } from '../pages/Loginpage';
import { Registerpage } from '../pages/Registerpage';

export const routes=createBrowserRouter([

    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                
                element:<Homepage/>
            },
            {
                path:'/report',
                element:<ReportTrash/>
            },
            {
                path:'/drop-points',
                element:<DropPointspage/>
            },
            {
                path:'/schedule-pickup',
                element:<SchedulePickup/>
            },
            {
                path:'/community',
                element:<Community/>
            },
           
],
    },
{
    path:'/login',
    element:<Loginpage/>
},{
    path:'/register',
    element:<Registerpage/>
},
    
]


);