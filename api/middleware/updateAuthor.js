import joi from 'joi'

const bodySchema = joi.object({
    name: joi.string().required(),
    lastName: joi.string().required(),
    nationality: joi.string().optional(),
    birthday: joi.date().required(),
})

const validateAuthor = async (req, res, next) => {
    try {
        await bodySchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Body invalido',
            error,
        })
    }
}

export default validateAuthor