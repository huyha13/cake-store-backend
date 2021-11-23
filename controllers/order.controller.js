const orderModel = require("../models/order.moduel")
class OrderController {
    async getOrderByPagination(req, res) {
        let { page } = req.query;
        if (!page) {
          page = 1;
        }
        let limit = 3;
        let total = await orderModel.find().count();
        let orderList = await orderModel
          .find()
          .limit(Number.parseInt(limit))
          .skip((page - 1) * limit);
        if (orderList) {
          return res.status(200).json({
            orders: orderList,
            currentPage: page,
            totalPages: Math.ceil(total / limit),
          });
          
        }
        return res.status(400).json({ msg: "Err" });
      }
      
}
module.exports = new OrderController()

