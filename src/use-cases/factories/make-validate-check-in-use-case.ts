import { PrismaCheckInsRepository } from '@/repositories/prisma/prima-check-ins-repository'
import { ValidadeCheckinUseCase } from '../validade-check-in'

export function makeValidadeCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidadeCheckinUseCase(checkInsRepository)

  return useCase
}
