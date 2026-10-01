import mongoose from 'mongoose'

export const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI

  if (!mongoURI || mongoURI.includes('YOUR_MONGODB_ATLAS_CONNECTION_STRING_HERE')) {
    console.log('⚠️  MongoDB URI not configured in Backend/.env — running with in-memory data store.')
    return false
  }

  try {
    const conn = await mongoose.connect(mongoURI)
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`)
    return true
  } catch (error) {
    console.error(`❌ MongoDB Atlas Connection Error: ${error.message}`)
    console.log('⚠️  Falling back to in-memory store so server continues running.')
    return false
  }
}
