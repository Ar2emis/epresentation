import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Redirect404, ScrollToTop } from '../../components/common'
import { PresentationSlide as Slide, PresentationNavigation as Navigation } from '../../components/presentation'
import presentations from '../../data'

export default function Presentation() {
  const { presentationId } = useParams()
  const presentation = presentations[presentationId]
  if (!presentation) { return (<Redirect404 />)}
  const [searchParams]  = useSearchParams()
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1
  if(isNaN(page) || page < 1 || page > presentation.slides.length) { return (<Redirect404 />)}

  return (
    <ScrollToTop>
      <Slide slide={presentation.slides[page - 1]} key={page} />
      <Navigation presentation={presentation} page={page}/>
    </ScrollToTop>
  )
}
