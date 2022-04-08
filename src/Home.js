import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/about/2"><h1>소개로 이동</h1></Link>
        </div>
    );
}

export default Home;