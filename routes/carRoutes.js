const mongoose = require('mongoose');
const Cars = mongoose.model('Cars');

module.exports = (app) => {

  app.get(`/api/car`, async (req, res) => {
    let cars = await Cars.find();
    return res.status(200).send(cars);
  });

  app.post(`/api/car`, async (req, res) => {
    let car = await Cars.create(req.body);
    return res.status(201).send({
      error: false,
      car
    })
  })

  app.put(`/api/car/:id`, async (req, res) => {
    const {id} = req.params;

    let car = await Cars.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      car
    })

  });

  app.delete(`/api/car/:id`, async (req, res) => {
    const {id} = req.params;

    let car = await Cars.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      car
    })

  })

}