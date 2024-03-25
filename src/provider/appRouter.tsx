import {publicRoutes} from './routes'
import {Navigate, Route, Routes} from 'react-router-dom'


const AppRouter = () => {
  const MissingRoute = () => <Navigate to={{pathname: '/page'}}/>

  return (
    <>
      <Routes>
        {publicRoutes.map(({path, Component}, index) => (
          <Route path={path} key={index} element={<Component/>}/>
        ))}
        <Route path={'*'} element={<MissingRoute/>}/>

      </Routes>
    </>
  )
}

export default AppRouter