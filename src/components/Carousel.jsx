import Carousel from 'react-bootstrap/Carousel';

const ProjectCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First project"
        />
        <Carousel.Caption>
          <h3>Project 1</h3>
          <p>Restoq - Your restaurant management solution</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Tambahkan item carousel lainnya */}
    </Carousel>
  );
};

export default ProjectCarousel;
