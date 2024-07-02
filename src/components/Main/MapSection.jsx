import React, { useEffect, useState } from 'react';

const MapSection = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7ed6f1e3fdc0571f1403134fb2c7ff00&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.8228, 128.1555),
          level: 12
        };
        const newMap = new window.kakao.maps.Map(container, options);
        setMap(newMap);

        // 여러 개의 마커 추가
        addMarker(newMap, '토끼', new window.kakao.maps.LatLng(37.754213, 128.875491), '남이섬');
        addMarker(newMap, '늑대', new window.kakao.maps.LatLng(37.764551, 128.902122), '정선 아리랑 공원');
        addMarker(newMap, '곰', new window.kakao.maps.LatLng(38.003547, 128.343217), '북한산');
        addMarker(newMap, '사슴', new window.kakao.maps.LatLng(37.625435, 128.114067), '설악산');
        addMarker(newMap, '호랑이', new window.kakao.maps.LatLng(37.755017, 128.899265), '오대산');
        addMarker(newMap, '여우', new window.kakao.maps.LatLng(37.473636, 128.352029), '인제 솔향수목원');
        addMarker(newMap, '다람쥐', new window.kakao.maps.LatLng(37.828769, 128.092178), '동해 양양 송천리');
        addMarker(newMap, '오소리', new window.kakao.maps.LatLng(37.795783, 128.574223), '화천 청풍호');
        addMarker(newMap, '사자', new window.kakao.maps.LatLng(37.850097, 128.134523), '강릉 국립공원');
        addMarker(newMap, '원숭이', new window.kakao.maps.LatLng(38.161055, 128.599379), '태백 구룡포');
        addMarker(newMap, '오색딱다구리', new window.kakao.maps.LatLng(37.367604, 128.430439), '오색딱다구리 서식지');
        addMarker(newMap, '아시아흰죽지', new window.kakao.maps.LatLng(37.294393, 128.315372), '아시아흰죽지 서식지');



      });
    };

    return () => {
      // 컴포넌트가 unmount될 때 스크립트 태그 제거
      document.head.removeChild(script);
    };
  }, []);

  // 마커 추가 함수
  const addMarker = (map, animalName, position, comment) => {
    const marker = new window.kakao.maps.Marker({
      position: position,
      map: map,
      title: animalName, // 마커에 동물 이름 추가
      comment: comment
    });

    // 마커 클릭 시 인포윈도우(커스텀 오버레이) 표시
    const infowindow = new window.kakao.maps.InfoWindow({
      content: `
        <div style="padding: 5px; ">
          <strong>${animalName}</strong><br>${comment}
        </div>
      `
    });

    window.kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
      map.setCenter(marker.getPosition()); // 마커 위치로 지도 이동
      map.setLevel(3); // 지도 확대
    });

    window.kakao.maps.event.addListener(marker, 'mouseover', () => {
      infowindow.open(map, marker);
    });

    // 마커에서 마우스를 뗄 때 인포윈도우 닫기
  window.kakao.maps.event.addListener(marker, 'mouseout', () => {
    infowindow.close();
  });

    setMarkers(prevMarkers => [...prevMarkers, marker]);
  };

  // 검색 함수
  const handleSearch = () => {
    // 입력된 키워드로 마커를 찾아서 이동
    markers.forEach(marker => {
      if (marker.getTitle() === searchKeyword) {
        map.setCenter(marker.getPosition()); // 마커 위치로 지도 이동
        map.setLevel(3); // 지도 확대
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="동물 이름으로 검색하세요."
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button" onClick={handleSearch}>검색</button>
        </div>
      </div>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default MapSection;
