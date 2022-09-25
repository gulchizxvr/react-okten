import Joi from "joi";

const CommentValidator = Joi.object({
    postId : Joi.number().min(1).required().messages({'number.base':'Цифри, мінімум одна'}),
    name : Joi.string().min(1).max(500).required()
    })

export {CommentValidator}