const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'El email de usuario es obligatorio.'],
    minlength: [10, 'El email necesita mínimo 10 caracteres.'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña de usuario es obligatoria.'],
  },
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio.'],
    minlength: [5, 'El usuario necesita mínimo 5 caracteres.'],
    trim: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "TEACHER", "STUDENT"],
    default: "STUDENT",
  },
  avatar: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg"
  },
  address: {
    type: String,
    required: [true, 'La dirección es obligatoria.'],
    minlength: [15, 'La dirección necesita mínimo 15 caracteres.']
  },
  phoneNumber: {
    type: Number,
    required: [true, 'El numero de telefono es obligatorio.'],
    minlength: [9, 'El numero de telefono necesita mínimo 9 caracteres.'],
    maxlength: [9, 'El numero de telefono necesita máximo 9 caracteres.']
  },
  idSkype: {
    type: String,
    trim: true,
  },
  rating: [{
    type: Number,
    min: [1, 'La valoración mínima permitida es 1'],
    max: [10, 'La valoración máxima permitida es de 10.']
  }]
},
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User