import { Request, Response } from 'express'
import { UserModel } from '../database/models/UserModel'

class UserController {
  async findAll (req: Request, res: Response) {
    const users = await UserModel.findAll()
    return users.length > 0 ? res.status(200).json(users) : res.status(404).json({ message: 'Users not found!' })
  }

  async findOne (req: Request, res: Response) {
    const { id } = req.params
    const user = await UserModel.findOne({
      where: {
        id
      }
    })

    if (!user) {
      return res.status(404).json({ message: `User with id ${id} not found :(` })
    }

    return res.status(200).json(user)
  }

  async create (req: Request, res: Response) {
    const { email, name, age } = req.body

    const user = await UserModel.create({
      email,
      name,
      age
    })

    return res.status(201).json(user)
  }

  async update (req: Request, res: Response) {
    const { name, email, age } = req.body
    const { id } = req.params

    await UserModel.update(
      { name, email, age },
      { where: { id } }
    )

    return res.status(204).send()
  }

  async destroy (req: Request, res: Response) {
    const { id } = req.params
    await UserModel.destroy({
      where: {
        id
      }
    })

    return res.status(204).send()
  }
}

export default new UserController()
