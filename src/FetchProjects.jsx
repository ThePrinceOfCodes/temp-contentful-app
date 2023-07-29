import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
    space: '6bk04ueafwkg',
    environment: 'master',
    accessToken: 'gsZWIdYmQgZliyL24egaFcmwqJFqG6ruQbNTMKOFWRo'
})

export const  useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async() => {
        try {
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item)=>{
                const {title, url, img} = item.fields
                const id = item.sys.id
                const image = img?.fields?.file?.url
                return {title,url,id,image}
            })
            setProjects(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        getData()
    },[]);

    return {loading, projects}
}

