import { useSwiper } from "swiper/react"
import { FaChevronCircleLeft } from "react-icons/fa";

const CustomPrevButton = () => {
  const swiper = useSwiper();
  return (
    <div className="text-white md:text-black">
      <button onClick={() => swiper.slidePrev()}>
        <FaChevronCircleLeft size={28} />
      </button>
    </div>
  )
}

export default CustomPrevButton