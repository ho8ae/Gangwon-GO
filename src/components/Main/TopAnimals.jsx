import React, { useState } from 'react';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

function TopAnimals() {
  // 가장 많이 보이는 동물 데이터 예시
  const topAnimals = [
    { id: 1, name: '고라니', image: 'images/고라니.webp', describe: '고라니는 강원도에서 흔히 볼 수 있습니다..', videoUrl: 'https://www.youtube.com/embed/RNtFlYRcdg8' },
    { id: 2, name: '백조', image: 'images/백조.jpeg', describe: '강원도의 백조는 정말 아름다워요!', videoUrl: 'https://www.youtube.com/embed/nrUeSG2NzwY' },
    { id: 3, name: '사슴', image: 'images/사슴.jpeg', describe: '사슴을 보고 싶다면 어디로 가야할까요?', videoUrl: 'https://www.youtube.com/embed/70rbRc5G9vk' },
    // 추가적인 동물 데이터...
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleImageClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="container">
      <p className="text-center mt-5 font-weight-bold introduce-container h3">강원도에서 가장 많이 보이는 동물 Top 3</p>
      <p className='text-center fs-6 text-muted mb-5'>(클릭 시 영상 확인 가능)</p>
      <div className="row">
        {topAnimals.map(animal => (
          <div key={animal.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <div className="top-animal-image-container" onClick={() => handleImageClick(animal)}>
                <img src={animal.image} className="card-img-top animal-image" alt={animal.name} />
              </div>
              <div className="card-body">
                <p className="card-title">{animal.name}</p>
                <p className='card-text'>{animal.describe}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 5 mins ago</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAnimal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedAnimal.name}</h5>
                
              </div>
              <div className="modal-body">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" style={{ width:'765px', height: '600px' }} src={selectedAnimal.videoUrl} allowFullScreen title={selectedAnimal.name}></iframe>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopAnimals;
