import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimalCard from './AnimalCard';
import AnimalModal from './AnimalModal';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

const animals = [
    // 36개의 동물 데이터 예시
    { 
        id: 1, 
        name: '강원도의 왕 호랑이', 
        image: '/images/호랑이.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 튼튼한 근육과 강력한 발톱을 가진 호랑이는 강원도의 깊은 산림 지대에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 호랑이는 주로 외톨이로 생활하며 자신의 영역을 강하게 지키는 경향이 있습니다. 교활하고 민첩하며 사냥에 능합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 깊은 산림 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 2, 
        name: '산양', 
        image: '/images/산양.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 두꺼운 털과 강인한 다리를 가진 산양은 주로 강원도의 고산 지대에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 산양은 온화하고 사교적인 성향을 가지고 있으며, 무리를 지어 생활합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 고산 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 3, 
        name: '사슴', 
        image: '/images/사슴.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 가늘고 긴 다리와 뿔을 가진 사슴은 강원도의 다양한 지역에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 사슴은 온화하고 조용한 성격을 가지며, 주로 산림 지대나 하천 주변에서 자유롭게 떠다닙니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대나 하천 주변에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 4, 
        name: '오소리', 
        image: '/images/오소리.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 길고 거친 털과 강력한 다리를 가진 오소리는 강원도의 산림 지대에서 활동합니다.<br /><br />
                <strong>성격:</strong> 오소리는 밤에 활동적이며, 트렁크나 풀밭을 뚫고 다닙니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 5, 
        name: '늑대', 
        image: '/images/늑대.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 크고 강한 몸과 예리한 송곳니를 가진 늑대는 강원도의 깊은 산림 지대에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 늑대는 흔히 무리를 지어 생활하며, 사냥 본능이 강하고 지능이 뛰어납니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 깊은 산림 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 6, 
        name: '고라니', 
        image: '/images/고라니.webp', 
        description: (
            <>
                <strong>특징:</strong> 작고 귀여운 외모와 무리를 지어 생활하는 고라니는 강원도의 다양한 지역에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 고라니는 사교적이고 호기심이 많으며, 주로 낮에 활동합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 다양한 지역에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 7, 
        name: '곰', 
        image: '/images/곰.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 풍성한 털과 강력한 몸을 가진 곰은 강원도의 산림 지대에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 곰은 주로 개체 수가 적고 사람과 접촉을 피하는 경향이 있습니다. 주로 먹이를 찾는 것에 집중하며, 겨울철에는 눈 속에서 그들의 흔적을 발견할 수 있습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 8, 
        name: '수달', 
        image: '/images/수달.webp', 
        description: (
            <>
                <strong>특징:</strong> 물에서 활동적인 생활을 하는 수달은 강원도의 하천이나 호수에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 수달은 호기심이 많고 똑똑하며, 물 속에서도 능숙하게 움직입니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 하천이나 호수에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 9, 
        name: '뱀', 
        image: '/images/뱀.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 다양한 크기와 색상을 가진 뱀은 주로 강원도의 산림 지대나 물가에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 뱀은 온도에 민감하며, 주로 따뜻한 지역을 선호합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대나 물가에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 10, 
        name: '맷돼지', 
        image: '/images/맷돼지.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 강력한 몸과 날카로운 이빨을 가진 맷돼지는 강원도의 다양한 지역에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 맷돼지는 주로 무리를 지어 생활하며, 주변 환경에 잘 적응합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 다양한 지역에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 11,  
        name: '비둘기', 
        image: '/images/비둘기.webp', 
       
        description: (
                        <>
                            <strong>특징:</strong> 다양한 크기와 색상의 비둘기는 주로 강원도의 도시나 농경지에서 발견됩니다.<br /><br />
                            <strong>성격:</strong> 비둘기는 사교적이고 따뜻하며, 공공 장소에서도 잘 적응합니다.<br /><br />
                            <strong>출몰지역:</strong> 강원도의 도시나 농경지에서 주로 발견됩니다.
                        </>
                    )                    
    },
    { 
        id: 12, 
        name: '백조', 
        image: '/images/백조.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 우아한 외모와 긴 목을 가진 백조는 주로 강원도의 호수와 연못에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 백조는 조용하고 우아한 성격을 가지며, 물 위에서 우아하게 뜰 수 있습니다. 물 속에서 뛰어난 수영 능력을 가지고 있습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 호수와 연못에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 13, 
        name: '도마뱀', 
        image: '/images/도마뱀.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 작고 호기심 많은 도마뱀은 강원도의 다양한 지역에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 도마뱀은 주로 작고 호기심이 강하며, 긴 꼬리를 통해 빠르게 이동합니다. 다양한 크기와 색상을 가지고 있으며, 산림 지대나 물가에서 자주 발견됩니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 다양한 지역에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 14, 
        name: '빙어', 
        image: '/images/빙어.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 대표적인 물고기인 빙어는 강원도의 호수와 연못에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 빙어는 물 속에서 조용하게 움직이며, 주로 얼음 위에서 먹이를 사냥합니다. 빙어는 얇고 긴 몸을 가지고 있으며, 물 위에서도 우아하게 움직일 수 있습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 호수와 연못에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 15, 
        name: '사냥개', 
        image: '/images/사냥개.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 사냥 개는 강원도의 산림 지대와 숲 속에서 주로 발견됩니다.<br /><br />
                <strong>성격:</strong> 사냥 개는 활동적이고 경계심이 강한 성향을 가지며, 주인과의 충실한 유대 관계를 형성합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 숲 속에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 16, 
        name: '붉은여우', 
        image: '/images/붉은여우.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 붉은 여우는 강원도의 산림 지대와 농경 지대에서 발견될 수 있으며, 붉은색의 털과 예리한 눈을 가지고 있습니다.<br /><br />
                <strong>성격:</strong> 붉은 여우는 온순하고 교활한 성향을 가지며, 밤에 활동적입니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 농경 지대에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 17, 
        name: '청설모', 
        image: '/images/청설모.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 청설모는 강원도의 산림 지대와 숲속에서 주로 발견되며, 청색의 털과 작은 몸집을 가지고 있습니다.<br /><br />
                <strong>성격:</strong> 청설모는 소심하고 예민한 성향을 가지며, 높은 나무 위에서 주로 생활합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 숲속에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 18, 
        name: '수리부엉이', 
        image: '/images/수리부엉이.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 수리부엉이는 강원도의 다양한 지역에서 발견될 수 있으며, 대형의 부엉이로 알려져 있습니다.<br /><br />
                <strong>성격:</strong> 수리부엉이는 밤에 활동적이며, 날개를 펼칠 때 멋진 모습을 보여줍니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 다양한 지역에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 19, 
        name: '갈매기', 
        image: '/images/갈매기.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 갈매기는 주로 강원도의 해안과 바닷가에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 갈매기는 자유로운 성격을 가지며, 고공에서 우아하게 날개짓을 합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 해안과 바닷가에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 20, 
        name: '산토끼', 
        image: '/images/산토끼.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 작고 귀여운 산토끼는 강원도의 숲 속이나 초원에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 산토끼는 신속하고 경계심이 강한 성향을 가지며, 풀밭이나 나무 아래에서 주로 생활합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 숲 속이나 초원에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 21, 
        name: '붉은다람쥐', 
        image: '/images/붉은다람쥐.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 붉은색의 털과 작은 몸집을 가진 붉은 다람쥐는 강원도의 숲 속에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 붉은 다람쥐는 활동적이고 호기심 많은 성향을 가지며, 나무 위에서 뛰어다니는 것을 좋아합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 숲 속에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 22, 
        name: '사슴벌레', 
        image: '/images/사슴벌레.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 사슴의 뿔과 비슷한 모양을 가진 사슴벌레는 강원도의 숲 속에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 사슴벌레는 날이 좋을 때 활동적이며, 나무 껍질에 숨어 있는 것을 좋아합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 숲 속에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 23, 
        name: '흰머리독수리', 
        image: '/images/흰머리독수리.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 흰 머리를 가진 대형의 독수리인 흰머리독수리는 강원도의 산림 지대와 하천 주변에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 흰머리독수리는 고상하고 강인한 성격을 가지며, 고공에서 우아하게 날개짓을 합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 하천 주변에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 24, 
        name: '토끼', 
        image: '/images/토끼.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 작고 귀여운 외모와 긴 귀를 가진 토끼는 강원도의 풀밭이나 농경지에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 토끼는 신속하고 경계심이 강하며, 낮에 활동하는 경우가 많습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 풀밭이나 농경지에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 25, 
        name: '너구리', 
        image: '/images/너구리.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 귀여운 외모와 튼튼한 꼬리를 가진 너구리는 강원도의 다양한 지역에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 너구리는 활동적이고 호기심이 많으며, 주로 나무 위에서 생활합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 다양한 지역에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 26, 
        name: '고양이', 
        image: '/images/고양이.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 다양한 털색과 크기를 가진 고양이는 강원도의 마을과 집 주변에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 고양이는 독립적이고 호기심 많은 성향을 가지며, 주로 사냥을 즐깁니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 마을과 집 주변에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 27, 
        name: '거북이', 
        image: '/images/거북이.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 딱딱한 등껍질과 작은 다리를 가진 거북이는 강원도의 호수와 연못에서 발견될 수 있습니다.<br /><br />
                <strong>성격:</strong> 거북이는 느린 움직임과 조용한 성격을 가지며, 물 속에서도 안정적으로 행동합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 호수와 연못에서 주로 발견됩니다.
            </>
        )
    },

    { 
        id: 29, 
        name: '대왕큰부리백로', 
        image: '/images/대왕큰부리백로.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 큰 부리와 눈을 가진 대형 백로로, 강원도의 수역과 농경지에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 대왕큰부리백로는 주로 물가에서 사냥을 하며, 물고기와 작은 동물을 잡아 먹습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 호수와 강가에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 30, 
        name: '아시아흰죽지', 
        image: '/images/아시아흰죽지.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 주로 강원도의 산림 지대에서 발견되는 작은 백조로, 목이 길고 아름다운 외모를 가지고 있습니다.<br /><br />
                <strong>성격:</strong> 아시아흰죽지는 조용하고 수줍은 성향을 가지며, 주로 호수와 연못에서 생활합니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 강가에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 31, 
        name: '비단오소리', 
        image: '/images/비단오소리.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 길고 부드러운 털을 가진 비단오소리로, 주로 강원도의 산림 지대에서 활동합니다.<br /><br />
                <strong>성격:</strong> 비단오소리는 주로 밤에 활동적이며, 작은 곤충과 과일을 먹습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림 지대와 농경지에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 32, 
        name: '오색딱다구리', 
        image: '/images/오색딱다구리.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 아름다운 깃털과 오색의 빛깔을 가진 딱다구리로, 강원도의 산림과 농경지에서 발견됩니다.<br /><br />
                <strong>성격:</strong> 오색딱다구리는 높은 나무에 둥지를 짓고, 주로 작은 벌레와 씨앗을 먹습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 산림과 농경지에서 주로 발견됩니다.
            </>
        )
    },
    { 
        id: 33, 
        name: '백로', 
        image: '/images/백로.jpeg', 
        description: (
            <>
                <strong>특징:</strong> 알락이 달린 꼬리와 예쁜 깃털을 가진 백로로, 강원도의 호수와 강가에서 주로 발견됩니다.<br /><br />
                <strong>성격:</strong> 알락꼬리백로는 물가에서 사냥을 하며, 주로 작은 물고기와 물생물을 먹습니다.<br /><br />
                <strong>출몰지역:</strong> 강원도의 호수와 강가에서 주로 발견됩니다.
            </>
        )
    },
    

    // 추가적인 동물들도 위와 같은 형식으로 추가할 수 있습니다.
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
    { id: 1, name: '업데이트 중..', image: '/images/커밍순.jpeg', description: 'Description for Animal 2' },
 
    // 나머지 동물 데이터 추가
];

const MainBody = () => {
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    return (
        <Container>
            <Row>
                {animals.map((animal, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={2} className="mb-4">
                        <AnimalCard animal={animal} onClick={() => setSelectedAnimal(animal)} />
                    </Col>
                ))}
            </Row>
            {selectedAnimal && (
                <AnimalModal
                    show={!!selectedAnimal}
                    animal={selectedAnimal}
                    onHide={() => setSelectedAnimal(null)}
                />
            )}
        </Container>
    );
}

export default MainBody;
