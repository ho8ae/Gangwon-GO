import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid className="bg-light p-5 mb-5 mt-5">
      <h1 className='text-center mt-5 introduce-container'>강원도 동물 도감에 오신 걸 환영합니다.</h1>
      <p className='text-center fs-3 text-muted'>동물들을 클릭하여 확인해보세요!</p>
      
      <p className='text-center fs-6'>(추가하고 싶은 동물이나,마커를 등록하고 싶다면 문의사항으로 연락바랍니다.)</p>
    </Container>
  );
}

export default Header;
