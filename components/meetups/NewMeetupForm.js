import React, { useRef } from "react"
import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"

const NewMeetupForm = (props) => {
  const titleInputRef = useRef(),
    imageInputRef = useRef(),
    addressInputRef = useRef(),
    descriptionInputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

    props.onAddMeetup({
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    })
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="text" id="image" ref={imageInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Description</label>
          <textarea id="title" rows="5" ref={descriptionInputRef} required />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
