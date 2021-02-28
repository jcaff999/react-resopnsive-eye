import React, { Fragment, useState } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable'
import {useSelector, useDispatch} from 'react-redux';

const BaseLeft = props => {

  const patient = useSelector(state => state.patient);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(props.width)
  const [height, setHeight] = useState(props.height)
  const [top, setTop] = useState(props.top)
  const [left, setLeft] = useState(props.left)
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle)

  const contentStyle = {
    top,
    left,
    width,
    height,
    position: 'absolute',
    transform: `rotate(${rotateAngle}deg)`
  }

  const handleResize = (style, isShiftKey, type) => {
    const { top, left, width, height } = style
    setWidth(Math.round(width))
    setHeight(Math.round(height))
    setTop(Math.round(top))
    setLeft(Math.round(left))
    dispatch({type: 'CHANGE_WIDTHLEFT', payload: width})
    console.log(patient.widthLeft)
  }

  const handleRotate = rotateAngle => {
    setRotateAngle(rotateAngle)
  }

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX)
    setTop(top + deltaY)
    console.log("wwwlwlwlwlwllwlwlwlwlw")
  }

  const handleClick = () => {

    console.log("wwwlwlwlwlwllwlwlwlwlw")
  }

  return (
    <Fragment>
      <div style={contentStyle}>{props.children}</div>

      <ResizableRect
        top={top}
        rotatable
        left={left}
        aspectRatio
        minWidth={10}
        width={width}
        minHeight={10}
        height={height}
        onDrag={handleDrag}
        onDragStart={handleClick}
        onRotate={handleRotate}
        onResize={handleResize}
        zoomable="nw, ne, se, sw"
        rotateAngle={rotateAngle}
      />
    </Fragment>
  )
}

export default BaseLeft
