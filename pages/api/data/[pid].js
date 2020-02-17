import nextConnect from 'next-connect'
import middleware from '../../../middleware/mongodb'

const handler = nextConnect()

handler.use(middleware)

handler.get((req, res) => {
  const {
    query: { pid }
  } = req
  req.db.collection('page-data').find({ page: `${pid}` }).toArray(function (err, docs) {
    if (!err) {
       res.json(docs)
       console.log(docs)
    }
  })
})

export default handler
