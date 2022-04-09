import { MongoClient } from "mongodb"
import Head from "next/head"
import React from "react"
import MeetupList from "../components/meetups/MeetupList"

const HomePage = ({ meetups }) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  )
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Naz:Ggkzc162144arPvM@cluster0.0nbqm.mongodb.net/meetups-mine?retryWrites=true&w=majority"
  )
  const db = client.db()
  let meetups = await db.collection("meetups-mine").find({}).toArray()
  meetups = JSON.parse(JSON.stringify(meetups))
  client.close()

  return { props: { meetups }, revalidate: 1 }
}

export default HomePage
