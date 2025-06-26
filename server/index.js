const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri="mongodb+srv://ahmadmaajal:smUhNGSTHJua7Lnf@ahmadcluster03.55mowrg.mongodb.net/?retryWrites=true&w=majority&appName=AhmadCluster03";
const client = new MongoClient(uri);

async function connectDB() {
  await client.connect();
  console.log('✅ Connected to MongoDB');
  const db = client.db('jobtracker');
  const jobsCollection = db.collection('jobs');

  // GET all jobs
  app.get('/jobs', async (req, res) => {
    const jobs = await jobsCollection.find({}).toArray();
    res.json(jobs);
  });

  // POST a new job
  app.post('/jobs', async (req, res) => {
    const result = await jobsCollection.insertOne(req.body);
    res.json({ job: { ...req.body, id: result.insertedId } });
  });

  // PUT update a job
  app.put('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    const update = req.body;
    const result = await jobsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: update },
      { returnDocument: 'after' }
    );
    res.json({ job: { ...result.value, id: result.value._id } });
  });

  // DELETE a job
  app.delete('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    await jobsCollection.deleteOne({ _id: new ObjectId(id) });
    res.sendStatus(204);
  });

  app.listen(8080, () => {
    console.log('🚀 Server running at http://localhost:8080');
  });
}

connectDB().catch(console.error);
