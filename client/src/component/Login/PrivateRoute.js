import {Redirect} from "react-router-dom";

const Route =({ component:Component, roles, path})=>{
    roles = roles || []
    return (
        <Route
        path={path}
        exact={true}
        render={(props)=>
        hashRoles(roles)?(
            <Component{...props}/>
        ):(
            isAuth()?(
                <Unauthorized/>
            ):(
                <Redirect to={"login"}/>
            )
        )
        }
        />
        )
}