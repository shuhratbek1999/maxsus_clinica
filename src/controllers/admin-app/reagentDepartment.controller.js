
const HttpException = require('../../utils/HttpException.utils');
// const status = require('../../utils/status.utils')
const reagentDepartmentModel = require('../../models/reagent_department.model')
const { validationResult } = require('express-validator');
const reagentModel = require('../../models/reagent.model');
const inspectionCategoryModel = require('../../models/doctor_category.model')
/******************************************************************************
 *                              Employer Controller
 ******************************************************************************/
class reagentDepartmentController {
    getAll = async (req, res, next) => {
        const model = await reagentDepartmentModel.findAll({
            include:[
                {model: reagentModel, as: 'reagent'},
                {model: inspectionCategoryModel, as: 'department'}
            ]
        });
        res.status(200).send({
            error: false,
            error_code: 200,
            message: 'Malumotlar chiqdi',
            data: model
        });
    }

    getOne = async (req, res, next) => {
        this.checkValidation(req);
        const model = await reagentDepartmentModel.findOne({
            where:{
                id: req.params.id
            },
            include:[
                {model: reagentModel, as: 'reagent'},
                {model: inspectionCategoryModel, as: 'department'}
            ]
        });
        if(!model){
            throw new HttpException(404, 'berilgan id bo\'yicha malumot yo\'q')
        }
        res.status(200).send({
            error: false,
            error_code: 200,
            message: 'Malumot chiqdi',
            data: model
        });
    }
   create = async (req, res, next) => {
       this.checkValidation(req);
       const model = await reagentDepartmentModel.create(req.body);
       res.status(200).send({
        error: false,
        error_code: 200,
        message: 'Malumotlar qo\'shildi',
        data: model
    });
   }
   update = async (req, res, next) => {
       this.checkValidation(req);
    const model = await reagentDepartmentModel.findOne({
        where:{
            id: req.params.id
        }
    });
    model.department_id = req.body.department_id;
    model.reagent_id = req.body.reagent_id;
    model.count = req.body.count;
    model.save();
    res.status(200).send({
        error: false,
        error_code: 200,
        message: 'Malumotlar tahrirlandi',
        data: model
    });
}
delete = async (req, res, next) => {
  const model = await reagentDepartmentModel.destroy({
        where:{
          id: req.params.id
        }
    });
    if(!model){
        throw new HttpException(404, "bunday id yoq")
    }
    res.status(200).send({
        error: false,
        error_code: 200,
        message: 'Malumot o\'chirildi',
        data: model
    });
}
    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

   
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new reagentDepartmentController;