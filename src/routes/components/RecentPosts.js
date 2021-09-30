import React, { useState, useEffect,forwardRef,useImperativeHandle } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
const baseURL = 'http://localhost:3000/api/news';
import axios from 'axios';
const RecentPosts = (props) => {

    const [login, setlogin] = useState()
    const [cat_id, setcatid] = useState()
    const [title, settitle] = useState()
    const [text, settext] = useState()
    const [author, setauthor] = useState()
    const [date, setdate] = useState()
    const [image, setimage] = useState(undefined)
    const [id, setid] = useState()
    const [idd, setidd] = useState(12)
    const [Post, setPost] = useState([]);
    const [refresh, setrefresh] = useState(false)
    const [Category, setCategory] = useState([])
    const [This, setThis] = useState([])

  

    function ShareToProps(item){
        setThis(item)
        // // setrefresh(!refresh)
        // console.log(item);
    }
    console.log('poiuytrew',This);
    
    
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data.reverse());
        });
    }, [refresh]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            setCategory(response.data);
        });
    }, [refresh]);
    return (
        <div className='my-main'>
            <h1 className='recentposttext'>Recent Posts</h1>
            <div className="recentdivwrapper">  
                {Post.slice(0, 6).map((item, index) => {
                    return (
                        <div key={index} className='Mappingdiv'  >
                            <NavLink onClick={()=>{
                                setThis(item)
                                ShareToProps(item)
                            }}  to='/newsprops'>
                                <div className='forhover'></div>
                                <img style={{ width: 330, height: 200 }} src={item.image} alt="" />
                            </NavLink>
                            <div style={{ display: 'flex', paddingTop: 10 }}>
                                <span className='categorymap'>Category</span>
                                <h4 className='datemap'>{item.date}</h4>
                            </div>
                            <h3 className='titlemap'><NavLink onClick={()=>ShareToProps(item.image)} to='/newsprops'>{item.title}</NavLink></h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default RecentPosts 

