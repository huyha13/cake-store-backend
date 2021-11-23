const customerModel = require("../models/customer.model");
class CustomerController {
  async getCustomerByPagination(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await customerModel.find().count();
    let customerList = await customerModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (customerList) {
      return res.status(200).json({
        customerList: customerList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
}
module.exports = new CustomerController();

