import { useSwiper } from "swiper/react"
import { TbCircleChevronRight } from "react-icons/tb";

const CustomNextButton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button onClick={() => swiper.slideNext()}>
        <TbCircleChevronRight size={37} />
      </button>
    </div>
  )
}

export default CustomNextButton