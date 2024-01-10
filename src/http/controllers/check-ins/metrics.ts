import { makeGetUserMatricsUseCase } from '@/use-cases/factories/make-get-user-metrics-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function matrics(request: FastifyRequest, reply: FastifyReply) {
  const getUserMatricsUseCase = makeGetUserMatricsUseCase()

  const { checkInsCount } = await getUserMatricsUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    checkInsCount,
  })
}
