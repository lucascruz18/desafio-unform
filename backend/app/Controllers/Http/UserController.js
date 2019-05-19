"use strict";

const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {
  async store({ request, response }) {
    const data = request.only([
      "username",
      "email",
      "password",
      "password_confirmation"
    ]);

    try {
      if (data.password === data.password_confirmation) {
        delete data.password_confirmation;
        const user = User.create(data);

        return user;
      } else {
        return response.status(401).send({
          error: "senhas não conferem"
        });
      }
    } catch (error) {
      return response.status().send({
        error: "Houve um erro ao criar seu usuário"
      });
    }
  }

  async update({ request, response, auth: { user } }) {
    const data = request.only([
      "username",
      "password_old",
      "password",
      "password_confirmation"
    ]);

    if (data.password_old) {
      const isSame = await Hash.verify(data.password_old, user.password);

      if (!isSame) {
        return response.status(401).send({
          error: {
            message: "Senha antiga inválida"
          }
        });
      }
      if (data.password_confirmation !== data.password) {
        return response.status(401).send({
          error: {
            message: "Senhas não conferem"
          }
        });
      } else {
        delete data.password_old;
        delete data.password_confirmation;
      }
    }

    if (!data.password) {
      delete data.password;
    }

    user.merge(data);

    await user.save();

    return user;
  }
}

module.exports = UserController;
