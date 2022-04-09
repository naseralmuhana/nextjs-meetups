import { MongoClient } from "mongodb"

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body

    const client = await MongoClient.connect(
      "mongodb+srv://Naz:Ggkzc162144arPvM@cluster0.0nbqm.mongodb.net/meetups-mine?retryWrites=true&w=majority"
    )
    const db = client.db()
    const result = await db.collection("meetups-mine").insertOne(data)

    client.close()

    res.status(201).json({ message: `Meetup Inserted!: ${result}` })
  }
}

export default handler
