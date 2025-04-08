import axios from 'axios';
import React, { useEffect, useState } from 'react'

const  useCallApi = (api) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(api)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    })
  return data
}

export default useCallApi
