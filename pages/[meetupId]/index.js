import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"
import React from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = ({ meetupData }) => {
  return (
    <>
      <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
      </Head>
      <MeetupDetail meetupData={meetupData} />
    </>
  )
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Naz:Ggkzc162144arPvM@cluster0.0nbqm.mongodb.net/meetups-mine?retryWrites=true&w=majority"
  )
  const db = client.db()
  let meetups = await db
    .collection("meetups-mine")
    .find({}, { _id: 1 })
    .toArray()
  meetups = JSON.parse(JSON.stringify(meetups))

  client.close()

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(
    "mongodb+srv://Naz:Ggkzc162144arPvM@cluster0.0nbqm.mongodb.net/meetups-mine?retryWrites=true&w=majority"
  )
  const db = client.db()
  let meetupData = await db
    .collection("meetups-mine")
    .findOne({ _id: ObjectId(meetupId) })

  meetupData = JSON.parse(JSON.stringify(meetupData))
  client.close()

  return {
    props: { meetupData },
  }
}

export default MeetupDetails
