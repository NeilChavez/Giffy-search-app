import {useParams} from "react-router-dom"
import { useGifs } from "../../hooks/useGifs"
import Gif from "../../components/Gif"

export default function SearchPage(){
    const {keyword} = useParams()
    const {gifs, loading} = useGifs({keyword: keyword})

    return <div> 
        {gifs.map(({id, urlGif, title}) => <Gif key={id} urlGif={urlGif} title={title}/>)}
    </div>
}