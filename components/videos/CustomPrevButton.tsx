import { useSwiper } from "swiper/react"
import { TbCircleChevronLeft } from "react-icons/tb";

const CustomPrevButton = () => {
  const swiper = useSwiper();
  return (
    <div className="hidden lg:block">
      <button onClick={() => swiper.slidePrev()}>
        <TbCircleChevronLeft size={37} />
      </button>
    </div>
  )
}

export default CustomPrevButton