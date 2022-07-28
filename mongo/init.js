// This user will be created in the db specified by environment
// variable MONGO_INITDB_DATABASE
db.createUser({
  user: 'username',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'appdb',
    },
  ],
})
