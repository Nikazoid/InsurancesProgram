const mongoose = require('mongoose');
const Contract = mongoose.model('Contract');

module.exports = (app) => {

  app.get(`/api/contract`, async (req, res) => {
    let contracts = await Contract.find();
    return res.status(200).send(contracts);
  });

  app.post(`/api/contract`, async (req, res) => {
    let contract = await Contract.create(req.body);
    return res.status(201).send({
      error: false,
      contract
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