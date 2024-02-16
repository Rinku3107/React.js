import { useSearchParams } from "react-router-dom";

function Filter()
{
    const [serchParam, setSearchParam] = useSearchParams();
    const age=serchParam.get("age");
    const city=serchParam.get("city");

    return(
        <div>
        <h1>UseSerchParam</h1>
        <h1>Age is:-{age}</h1>
        <h1>Age is:-{city}</h1>

        </div>
    )
}
export default Filter;
