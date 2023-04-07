import Carousel from 'react-bootstrap/Carousel';

const Banner :React.FC  =() => {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="mx-auto d-block w-25"
              src="../public/shoe.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
    )
}

export default Banner