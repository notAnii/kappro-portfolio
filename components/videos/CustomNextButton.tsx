import { useSwiper } from "swiper/react"
import { FaChevronCircleRight } from "react-icons/fa";

const CustomNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="text-white md:text-black">
      <button onClick={() => swiper.slideNext()}>
        <FaChevronCircleRight size={28} />
      </button>
    </div>
  )
}

export default CustomNextButton