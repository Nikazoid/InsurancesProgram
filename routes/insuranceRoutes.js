const mongoose = require('mongoose');
const Insurance = mongoose.model('Insurance');

module.exports = (app) => {

  app.get(`/api/insurance`, async (req, res) => {
    let insurances = await Insurance.find();
    return res.status(200).send(insurances);
  });

  app.post(`/api/insurance`, async (req, res) => {
    let insurance = await Insurance.create(req.body);
    return res.status(201).send({
      error: false,
      insurance
    })
  })

  app.put(`/api/insurance/:id`, async (req, res) => {
    const {id} = req.params;

    let insurance = await Insurance.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      insurance
    })

  });

  app.delete(`/api/insurance/:id`, async (req, res) => {
    const {id} = req.params;

    let insurance = await Insurance.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      insurance
    })

  })

}