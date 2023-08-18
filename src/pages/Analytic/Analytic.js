import './Analytic.css'
import { ResponsiveContainer,BarChart,Bar,XAxis, YAxis, Tooltip,Area,AreaChart,CartesianGrid } from 'recharts'
import Data from '../../componens/Data/Data'


export default function Analytic (){
    console.log(Data);
    return(

        
        <div className='analyticContainer'>
            
            <div className='analyticContent'>
                <h2 className='analyticTitle'>Sales in Year</h2>
                <ResponsiveContainer  debounce={3} width="100%" height='50%' aspect={3}>
                    <BarChart data={Data}>
                        <Bar dataKey="price" fill="#d6006e" />
                        <XAxis stroke="#fff" dataKey="name" />
                        <YAxis stroke="#fff" ></YAxis>
                    </BarChart>


                </ResponsiveContainer>
                <ResponsiveContainer  debounce={3} width="100%"  height='50%' aspect={3}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={Data}
                        syncId="anyId"
                        // margin={{
                        // top: 10,
                        // right: 50,
                        // left: 0,
                        // bottom: 0,
                        // }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis stroke='#fff' dataKey="name" />
                        <YAxis stroke='#fff' />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#d6006e" fill="#d6006e" />
                    </AreaChart>

                </ResponsiveContainer>
            </div>
        </div>
    )
}