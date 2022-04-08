import React from 'react';
import { Link, useParams } from 'react-router-dom'

function About() {

    const { id } = useParams();

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트 입니다.</p>
            <p>id값은 : {id}</p>
            <Link to="/"><h1>홈으로 이동</h1></Link>
            <Link to="/23"><h1>이상한 곳으로 이동</h1></Link>
        </div>
    );
}

export default About;