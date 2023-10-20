import { Container, Slider } from './styles'

import { ButtonText } from '../ButtonText'

import { useRef } from 'react'

import previousArrow from '../../assets/previous.svg'
import nextArrow from '../../assets/next.svg'

export const SectionSlider = ({ title, children }) => {
  const sliderRef = useRef(null)

  console.log(sliderRef.current.offsetWidth)
  function handleNext() {
    event.preventDefault()
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth
  }
  function handleBack() {
    event.preventDefault()
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth
  }
  return (
    <Container>
      <h2>{title}</h2>
      <Slider>
        <ButtonText
          className="arrow-back"
          src={previousArrow}
          onClick={handleBack}
        />
        <div ref={sliderRef}>{children}</div>
        <ButtonText
          className="arrow-forward"
          src={nextArrow}
          onClick={handleNext}
        />
      </Slider>
    </Container>
  )
}
