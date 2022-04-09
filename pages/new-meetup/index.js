import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetup = () => {
  const router = useRouter()

  const addMeetupHandler = async (newMeetup) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeetup),
    })

    router.replace("/")
  }
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetup
