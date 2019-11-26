const mongoose = require('mongoose');
const Contract = mongoose.model('Contract');

module.exports = (app) => {

  app.get(`/api/contract`, async (req, res) => {
    let contracts = await Contract.find();
    return res.status(200).send(contracts);
  })

  app.post(`/api/contract`, async (req, res) => {
    if (!req.body) return res.sendStatus(400)

    const contract = await Contract.create(req.body)
    contract.save()
      .then(item => {
        res.status(200).send("Success, Your registration has been saved to the database!")
      })
      .catch(err => {
        res.status(400).send("Unable to save the item to the database!");
      })
  })

  app.put(`/api/contract/:id`, async (req, res) => {
    const {id} = req.params;

    let contract = await Contract.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      contract
    })

  });

  app.delete(`/api/contract/:id`, async (req, res) => {
    const {id} = req.params;

    let contract = await Contract.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      contract
    })
  })

}