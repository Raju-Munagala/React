import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS</h1>
            <h1>SOMETHING WENT WRONG</h1>
            <p>{err.status}: {err.statusText}</p>
        </div>
    );
};

export default Error; 