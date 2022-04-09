import React from "react"
import classes from "./MeetupDetail.module.css"

const MeetupDetail = ({ meetupData }) => {
  const { image, title, description, address } = meetupData

  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}

export default MeetupDetail
