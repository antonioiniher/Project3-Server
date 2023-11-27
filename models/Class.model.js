const { Schema, model } = require("mongoose")

const classSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El nombre es obligatorio.'],
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria.'],
            minlength: [20, 'La descripción debe tener mínimo 20 caracteres.']
        },
        languages: [{
            type: String,
            required: [true, 'El lenguaje es obligatorio.']
        }],
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        students: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        classType: {
            type: String,
            enum: ['On-site', 'Hybrid', 'Remote'],
            required: [true, 'El tipo de clase es obligatorio.']
        },
        status: {
            type: String,
            enum: ["Pending", "Accepted", "Cancelled"],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
)

const Class = model("Class", classSchema)

module.exports = Class