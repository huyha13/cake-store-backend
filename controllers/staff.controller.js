const staffModel = require("../models/staff.model");
class StaffController {
  async getStaffByPagination(req, res) {
    let { page } = req.query;
    if (!page) {
      page = 1;
    }
    let limit = 3;
    let total = await staffModel.find().count();
    let staffList = await staffModel
      .find()
      .limit(Number.parseInt(limit))
      .skip((page - 1) * limit);
    if (staffList) {
      return res.status(200).json({
        staffs: staffList,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      });
    }
    return res.status(400).json({ msg: "Err" });
  }
  async getStaffById (req,res){
    console.log(req.url)
    const id = req.params.id;
    staffModel.find({ _id: id }, (err, staff) => {
      if (!err) {
        res.json(staff);
      } else {
        res.status(400).json("Error get data");
      }
    });
  }
  
  async deleteStaff (req,res){
    const id = req.params.id;
    staffModel.deleteOne({_id :id},(err,staff)=>{
      if(!err){
        res.json(staff)
      }
      else{
        res.status(400).json('Erroge delete data')
      }
    })
  }
  async createStaff(req,res){
    const {position, work_address, staff_email,staff_name,staff_phone}=req.body
    let store = await storeModel.create({
        position, work_address, staff_email,staff_name,staff_phone
    })
    return res.status(200).json({store});
  }
  async updateStaff(req, res){
    const id = req.params.id;
    const {position, work_address, staff_email,staff_name,staff_phone} = req.body;
    staffModel.findByIdAndUpdate({ _id: id}, { position, work_address, staff_email,staff_name,staff_phone})
   .then(()=>res.json({msg:"Cap nhat thanh cong"}))
   .catch((err)=> res.json({msg:err}))
  }
}
module.exports = new StaffController();