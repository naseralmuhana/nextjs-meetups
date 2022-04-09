import React from "react"
import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import Link from "next/link"

const MeetupItem = ({ meetup }) => {
  const { _id, image, title, address } = meetup
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.action}>
          <Link href={`/${_id}`}>Show Details</Link>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
