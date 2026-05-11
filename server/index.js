//Incase of dns related error
/* 
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
*/
// const express = require('express')
// const dotenv = require('dotenv')
// const cors = require('cors')
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// dotenv.config()
// const uri = process.env.MONGODB_URI;
// const app = express()
// const PORT = process.env.PORT

// app.use(cors())
// app.use(express.json())

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {

//         await client.connect();
//         const db = client.db("project-wander")
//         const desCollection = db.collection('destinations')

//         // app.post('/destination', async (req, res) => {

//         //     const destinationData = req.body
//         //     console.log(destinationData);
//         //     const result = await desCollection.insertOne(destinaionData)
//         //     res.json(result)

//         // })
//         app.get('/destination', async (req, res) => {
//             const result = await desCollection.find().toArray();
//             res.json(result);
//         })




//         app.post('/destination', async (req, res) => {
//             const destinationData = req.body
//             console.log(destinationData);
//             const result = await desCollection.insertOne(destinationData)
//             res.json(result)
//         })
//         app.get('/destination/:id', async (req, res) => {
//             const { id } = req.params
//             //convert string id to object id
//             const result = await desCollection.findOne({ _id: new ObjectId(id) })
//             res.json(result)
//         })

//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);


// app.get('/', (req, res) => {
//     res.send("Server is running perfectly !!!")
// })

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
dotenv.config()
const uri = process.env.MONGODB_URI;
const app = express()
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const db = client.db("project-wander")
        const desCollection = db.collection('destinations')

        // GET all destinations
        app.get('/destination', async (req, res) => {
            const result = await desCollection.find().toArray();
            res.json(result);
        })

        // GET single destination
        app.get('/destination/:id', async (req, res) => {
            const { id } = req.params
            const result = await desCollection.findOne({ _id: new ObjectId(id) })
            res.json(result)
        })

        // POST - add new destination
        app.post('/destination', async (req, res) => {
            const destinationData = req.body
            const result = await desCollection.insertOne(destinationData)
            res.json(result)
        })

        // PUT - update existing destination
        // app.put('/destination/:id', async (req, res) => {
        //     const { id } = req.params
        //     const updatedData = req.body

        //     // except _id  all field update 
        //     const { _id, ...fieldsToUpdate } = updatedData
        //     // string id covert to object-id
        //     const result = await desCollection.updateOne(
        //         { _id: new ObjectId(id) },
        //         { $set: fieldsToUpdate }
        //     )
        //     res.json(result)
        // })
        //Patch
        // PATCH - partial update (only sent fields change, rest stays intact)
        app.patch('/destination/:id', async (req, res) => {
            const { id } = req.params
            const { _id, ...fieldsToUpdate } = req.body  // except  _id 

            const result = await desCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: fieldsToUpdate }  // only fields update 
            )
            res.json(result)
        })

        // Delete
        app.delete('/destination/:id', async (req, res) => {
            const { id } = req.params;
            const result = await desCollection.deleteOne({ _id: new ObjectId(id) })
            res.json(result)
        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Server is running perfectly !!!")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
