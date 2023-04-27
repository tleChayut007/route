import { useLocation, useParams } from "react-router-dom";
export default function Posts(){
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
     if(id==1) return(<>id:{id}Nissan GTR 35</>);
      if(id==2) return(<>id:{id}Lambogrini Arventador</>);
      if(id) return(<>id:{id}no items</>);
      if(name&&surname)return(<>
      hello {name} {surname}, How are you
      
      </>)


    return (<>
          Nissan GTR 35<br/>
          Lambogrini Arventador<br/>
    </>);
}