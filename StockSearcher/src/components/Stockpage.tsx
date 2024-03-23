import { useParams } from "react-router-dom";

export default function Stockpage() {
  const {id} = useParams();
    return (
      <div>
        <h1>Stockpage for {id}.</h1>
      </div>
    );
  }