import React from 'react';
import { useParams, useLocation } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body{
        background: #ffffbf;
        font-size: 2em;
        padding-top: 50px;
        padding-left: 20px;
    }
`
function QueryString() {

    const id_1 = useParams().id_1
    const loaction = useLocation();
    const navigate = useNavigate();



    return (
        <div>
            <GlobalStyle />
            <li>query / 뒤에 있는 숫자는 {id_1} 입니다.</li><br />
            <li>hash : {loaction.hash}</li>
            <li>pathname : {loaction.pathname}</li>
            <li>search : {loaction.search}</li>
            <li>state : {loaction.state}</li>
            <li>key : {loaction.key}</li><br />

            <li><button onClick={() => { navigate(-2) }}>go 2 pages back</button></li>
            <li><button onClick={() => { navigate(-1) }}>go 1 page back</button></li>
            <li><button onClick={() => { navigate(1) }}>go 1 page foward</button></li>
            <li><button onClick={() => { navigate(2) }}>go 2 pages forward</button></li>
            <li><button onClick={() => { navigate('/') }}>GO ROOT!</button></li>
            <li><button onClick={() => { navigate('/', { replace: true }) }}>GO ROOT!</button></li>
        </div>
    );
}

export default QueryString;

// - hash : 주소의 #문자열 뒤의 값
// - pathname : 현재 주소 경로
// - search : ?를 포함한 쿼리스트링
// - state : 페이지로 이동시 임의로 넣을 수 있는 상태 값
// - key : location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 고유의 값이 생성된다.
// http://localhost:3000/product/1?search=productName&q=demo#test

