import React from 'react'
import RecentPosts from './RecentPosts';
import CategoryPosts from './CategoryPosts';
import './Css.css'
const Home = () => {
    return (
        <>
            <RecentPosts />
            <CategoryPosts />
        </>
    )
}

export default Home
